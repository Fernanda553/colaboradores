// Listado.jsx

const Listado = ({ colaboradores }) => {
  if (!colaboradores) return null;

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td className="fix-text-overflow">{colaborador.nombre}</td>
            <td className="fix-text-overflow">{colaborador.correo}</td>
            <td className="fix-text-overflow">{colaborador.edad}</td>
            <td className="fix-text-overflow">{colaborador.cargo}</td>
            <td className="fix-text-overflow">{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Listado;
