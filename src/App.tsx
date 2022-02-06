import React, { FC, useState } from 'react';
import './App.css';
import HenkiloLista from './components/HenkiloTaulukko';
import UusiHenkilo from './components/UusiHenkilo';
import { IHenkilo } from './Interfaces';

const App: FC = () => {

  const [henkiloLista, setHenkiloLista] = useState<IHenkilo[]>([]);

  const addHenkilo = (henkilo: IHenkilo): void => {
    setHenkiloLista([...henkiloLista, henkilo]);
  };

  //Päivittää henkilön tiedot taulukkoon.
  const paivitaHenkilo = (henkilo: IHenkilo, paivitettyHenkilo: IHenkilo): void => {
    let newHenkiloLista = henkiloLista;
    newHenkiloLista.forEach( (element, index) => {
      if (element === henkilo) {
        newHenkiloLista[index] = paivitettyHenkilo;
      }
    });
    
    setHenkiloLista(newHenkiloLista);
  }

  const poistaHenkilo = (poistettavaHenkilo: IHenkilo): void => {
    setHenkiloLista(henkiloLista.filter((henkilo) => {
      return henkilo !== poistettavaHenkilo
    }))
  };

  //Päivittää henkilölista järjestyksen
  const paivitaHenkiloLista = (jarjestettuHenkilolista: IHenkilo[]): void => {
    setHenkiloLista(jarjestettuHenkilolista);
  }

  return (
    <div className="App">
      <div>
        <UusiHenkilo {... { addHenkilo }} />
      </div>
      <div>
        <HenkiloLista {...{ henkiloLista, poistaHenkilo, paivitaHenkilo, paivitaHenkiloLista }} />
      </div>
    </div>
  );
}

export default App;
