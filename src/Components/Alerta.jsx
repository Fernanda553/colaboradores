const Alerta = ({ alerta }) => {
  if (!alerta.mensaje) return null;

  const { mensaje, tipo } = alerta;

  return (
    <div className={`alert alert-${tipo}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alerta;
