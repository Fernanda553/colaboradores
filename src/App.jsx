// App.jsx
import React, { useState } from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alerta from './Components/Alerta';
import BaseColaboradores from './BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    setColaboradoresFiltrados([...colaboradores, colaborador]);
  };

  return (
    <div>
      <Alerta alerta={alerta} />
      <Buscador colaboradores={colaboradores} setColaboradoresFiltrados={setColaboradoresFiltrados} />
      <Formulario agregarColaborador={agregarColaborador} colaboradores={colaboradores} setAlerta={setAlerta} />
      <Listado colaboradores={colaboradoresFiltrados} />
    </div>
  );
};

export default App;