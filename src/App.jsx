import React from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alerta from './Components/Alerta';

const App = () => {
  return (
    <div>
      <Alerta />
      <Buscador />
      <Formulario />
      <Listado />
    </div>
  );
};

export default App;