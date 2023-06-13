// Buscador.jsx
import React, { useState, useEffect } from 'react';

const Buscador = ({ colaboradores, setColaboradoresFiltrados }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  useEffect(() => {
    if (terminoBusqueda === '') {
      setColaboradoresFiltrados(colaboradores);
    } else {
      const colaboradoresFiltrados = colaboradores.filter(
        (colaborador) =>
          colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          colaborador.correo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          colaborador.edad.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          colaborador.cargo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
          colaborador.telefono.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setColaboradoresFiltrados(colaboradoresFiltrados);
    }
  }, [terminoBusqueda, colaboradores, setColaboradoresFiltrados]);

  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  return (
    <input type="text" placeholder="Buscar colaborador" value={terminoBusqueda} onChange={handleChange} />
  );
};

export default Buscador;
