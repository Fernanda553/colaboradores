// Buscador.jsx
import { useState, useEffect } from "react";

const Buscador = ({ colaboradores, setColaboradoresFiltrados }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  useEffect(() => {
    if (terminoBusqueda === "") {
      setColaboradoresFiltrados(colaboradores);
    } else {
      const colaboradoresFiltrados = colaboradores.filter(
        (colaborador) =>
          colaborador.nombre
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          colaborador.correo
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          colaborador.edad
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          colaborador.cargo
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase()) ||
          colaborador.telefono
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase())
      );
      setColaboradoresFiltrados(colaboradoresFiltrados);
    }
  }, [terminoBusqueda, colaboradores, setColaboradoresFiltrados]);

  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  return (
    <input
      style={{ width: "320px" }}
      className="form-control mb-3 mx-left text-center"
      type="text"
      placeholder="Busca un colaborador"
      value={terminoBusqueda}
      onChange={handleChange}
    />
  );
};

export default Buscador;
