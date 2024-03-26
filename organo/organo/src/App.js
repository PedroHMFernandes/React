import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />
    </div>
  );
}

export default App;


