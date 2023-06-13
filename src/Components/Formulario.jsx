import React, { useState } from 'react';
const Formulario = ({ agregarColaborador, colaboradores }) => {
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
        alert('Por favor, completa todos los campos');
        return;
      }
    }
    if (!/^[\w\s]+ [\w\s]+$/.test(nuevoColaborador.nombre)) {
      alert('El nombre debe incluir nombre y apellido');
      return;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(nuevoColaborador.correo)) {
      alert('El correo debe tener un formato válido');
      return;
    }
    if (!/^\+569\d{8}$/.test(nuevoColaborador.telefono)) {
      alert('El número de teléfono debe tener el formato de números móviles de Chile (+569 más otros 8 dígitos)');
      return;
    }
    const colaborador = {
      id: (colaboradores.length + 1).toString(),
      ...nuevoColaborador,
    };
    agregarColaborador(colaborador);
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre del colaborador" value={nuevoColaborador.nombre} onChange={handleChange} />
      <input type="email" name="correo" placeholder="Email del colaborador" value={nuevoColaborador.correo} onChange={handleChange} />
      <input type="text" name="edad" placeholder="Edad del colaborador" value={nuevoColaborador.edad} onChange={handleChange} />
      <input type="text" name="cargo" placeholder="Cargo del colaborador" value={nuevoColaborador.cargo} onChange={handleChange} />
      <input type="tel" name="telefono" placeholder="Teléfono del colaborador" value={nuevoColaborador.telefono} onChange={handleChange} />
      <button type="submit">Agregar colaborador</button>
    </form>
  );
};

export default Formulario;
