import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import { useState } from 'react';
import Time from './components/Time/Time.js';
import Rodape from './components/Rodape/Rodape.js';

function App() {

  const times = [
    {
      nome: "Programação",
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: "Front-End",
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: "Data Science",
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: "DevOps",
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: "UX e Desing",
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: "Mobile",
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />

      {times.map(time => <Time
        nome={time.nome}
        key={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      <Rodape />
    </div>
  );
}

export default App;


