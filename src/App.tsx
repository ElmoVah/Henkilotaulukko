import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import HenkiloLista from './components/HenkiloLista';
import UusiHenkilo from './components/UusiHenkilo';
import { IHenkilo } from './Interfaces';

const App: FC = () => {

  const [henkiloLista, setHenkiloLista] = useState<IHenkilo[]>([]);

  const addHenkilo = (henkilo: IHenkilo): void => {
    setHenkiloLista([...henkiloLista, henkilo]);
  };

  const paivitaHenkilo = (henkilo: IHenkilo, paivitettyHenkilo: IHenkilo): void => {
    let newHenkiloLista = henkiloLista;
    for (let i = 0; i < newHenkiloLista.length; i++) {
      if (newHenkiloLista[i] === henkilo) {
        newHenkiloLista[i] = paivitettyHenkilo
      }
      console.log(newHenkiloLista[i], henkilo, paivitettyHenkilo);
    }
    setHenkiloLista(newHenkiloLista);
  }

  const poistaHenkilo = (poistettavaHenkilo: IHenkilo): void => {
    setHenkiloLista(henkiloLista.filter((henkilo) => {
      return henkilo !== poistettavaHenkilo
    }))
  };

  return (
    <div className="App">
      <div className="uusiHenkilo">
        <UusiHenkilo {... { addHenkilo }} />
      </div>
      <div className="henkiloLista">
        <HenkiloLista {...{ henkiloLista, poistaHenkilo, paivitaHenkilo }} />
      </div>
    </div>
  );
}

export default App;
