import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Listado from "./Components/Listado";
import Formulario from "./Components/Formulario";
import Buscador from "./Components/Buscador";
import Alerta from "./Components/Alerta";
import BaseColaboradores from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] =
    useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });

  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    setColaboradoresFiltrados([...colaboradores, colaborador]);
  };

  const deleteItem = (id) => {
    const listFilter = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradoresFiltrados(listFilter);
  };
  return (
    <div className="container-none px-4">
      <h1 className="text-center p-3">Lista de colaboradores</h1>
      <Buscador
        colaboradores={colaboradores}
        setColaboradoresFiltrados={setColaboradoresFiltrados}
      />
      <div className="row">
        <div className="col-lg-8 col-12">
          <Listado
            colaboradores={colaboradoresFiltrados}
            deleteItem={deleteItem}
            data-spy="scroll"
          />
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center">
          <div>
            <h2 className="p-4">Agregar colaborador</h2>
            <Formulario
              agregarColaborador={agregarColaborador}
              colaboradores={colaboradores}
              setAlerta={setAlerta}
            />
            <Alerta alerta={alerta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
