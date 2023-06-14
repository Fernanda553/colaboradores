import { useState } from "react";

const Formulario = ({ colaboradores, setAlerta }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
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
      if (nuevoColaborador[key] === "") {
        setAlerta({
          mensaje:
            "Para agregar colaborador ingrese todos los datos solicitados",
          tipo: "warning",
        });
        return;
      }
    }
    if (!/^[\w\s]+ [\w\s]+$/.test(nuevoColaborador.nombre)) {
      setAlerta({
        mensaje: "El nombre debe contener al menos un nombre y un apellido",
        tipo: "danger",
      });
      return;
    }

    if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        nuevoColaborador.correo
      )
    ) {
      setAlerta({
        mensaje: "Ingrese un correo válido",
        tipo: "danger",
      });
      return;
    }

    if (!/^\+569\d{8}$/.test(nuevoColaborador.telefono)) {
      setAlerta({
        mensaje: "Ingrese un teléfono válido (ej: +56912345678)",
        tipo: "danger",
      });
      return;
    }

    colaboradores.push({
      id: (colaboradores.length + 1).toString(),
      ...nuevoColaborador,
    });
    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setAlerta({
      mensaje: "Se ha agregado colaborador exitosamente",
      tipo: "success",
    });
  };

  return (
    <form
      className="d-flex flex-column form-group gap-3"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control"
        type="text"
        name="nombre"
        placeholder="Nombre del colaborador"
        value={nuevoColaborador.nombre}
        onChange={handleChange}
      />
      <input
        className="form-control"
        type="text"
        name="correo"
        placeholder="Correo del colaborador"
        value={nuevoColaborador.correo}
        onChange={handleChange}
      />
      <input
        className="form-control"
        type="text"
        name="edad"
        placeholder="Edad del colaborador"
        value={nuevoColaborador.edad}
        onChange={handleChange}
      />
      <input
        className="form-control"
        type="text"
        name="cargo"
        placeholder="Cargo del colaborador"
        value={nuevoColaborador.cargo}
        onChange={handleChange}
      />
      <input
        className="form-control"
        type="tel"
        name="telefono"
        placeholder="Teléfono del colaborador"
        value={nuevoColaborador.telefono}
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="submit">
        Agregar colaborador
      </button>
    </form>
  );
};

export default Formulario;
