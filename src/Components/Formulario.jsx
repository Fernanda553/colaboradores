import React, { useState } from 'react';

const Formulario = ({ colaboradores, setAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setNuevoColaborador({
      ...nuevoColaborador,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in nuevoColaborador) {
      if (nuevoColaborador[key] === '') {
        setAlerta({ mensaje: 'Para agregar colaborador ingrese todos los datos solicitados', tipo: 'warning' });
        return;
      }
    }
    if (!/^[\w\s]+ [\w\s]+$/.test(nuevoColaborador.nombre) ||
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(nuevoColaborador.correo) ||
        !/^\+569\d{8}$/.test(nuevoColaborador.telefono)) {
      setAlerta({ mensaje: 'No se podido agregar colaborador, verifique que ha ingresado los datos correctamente', tipo: 'danger' });
      return;
    }

    colaboradores.push({
      id: (colaboradores.length + 1).toString(),
      ...nuevoColaborador,
    });
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
    setAlerta({ mensaje: 'Se ha agregado colaborador exitosamente', tipo: 'success' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={nuevoColaborador.nombre} onChange={handleChange} />
      <input type="email" name="correo" placeholder="Correo" value={nuevoColaborador.correo} onChange={handleChange} />
      <input type="text" name="edad" placeholder="Edad" value={nuevoColaborador.edad} onChange={handleChange} />
      <input type="text" name="cargo" placeholder="Cargo" value={nuevoColaborador.cargo} onChange={handleChange} />
      <input type="tel" name="telefono" placeholder="Teléfono" value={nuevoColaborador.telefono} onChange={handleChange} />
      <button type="submit">Agregar colaborador</button>
    </form>
  );
};

export default Formulario;
