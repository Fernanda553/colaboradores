// App.jsx
import React, { useState } from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alerta from './Components/Alerta';
import BaseColaboradores from './BaseColaboradores';


const App = () => {
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  return (
    <div>
      <Alerta alerta={alerta} />
      <Buscador />
      <Formulario colaboradores={BaseColaboradores} setAlerta={setAlerta} />
      <Listado BaseColaboradores={BaseColaboradores} />
    </div>
  );
};

export default App;
