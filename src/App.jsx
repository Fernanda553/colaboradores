import React from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alerta from './Components/Alerta';
import BaseColaboradores from './BaseColaboradores';

const App = () => {
  return (
    <div>
      <Alerta />
      <Buscador />
      <Formulario colaboradores={BaseColaboradores} />
      <Listado BaseColaboradores={BaseColaboradores} />
    </div>
  );
};

export default App;
