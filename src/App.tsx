import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import HenkiloLista from './components/HenkiloLista';
import { IHenkilo } from './Interfaces';

const App: FC = () => {

  const [etunimi, setEtunimi] = useState<string>("");
  const [sukunimi, setSukunimi] = useState<string>("");
  const [ika, setIka] = useState<number>(0);
  const [henkiloLista, setHenkiloLista] = useState<IHenkilo[]>([]);

  const handleChangeEtunimi = (event: ChangeEvent<HTMLInputElement>): void => {
    setEtunimi(event.target.value);
  };

  const handleChangeSukunimi = (event: ChangeEvent<HTMLInputElement>): void => {
    setSukunimi(event.target.value);
  };

  const handleChangeIka = (event: ChangeEvent<HTMLInputElement>): void => {
    setIka(Number(event.target.value));
  };

  const addHenkilo = (): void => {
    const newHenkilo = {etunimi: etunimi, sukunimi: sukunimi, ika: ika};
    setHenkiloLista([...henkiloLista, newHenkilo]);
    setSukunimi("");
    setEtunimi("");
    setIka(0);
  };

  const poistaHenkilo = (poistettavaHenkilo: IHenkilo): void => {
    setHenkiloLista(henkiloLista.filter((henkilo) => {
      //Hyi miten likaista （＞人＜；） 
      return henkilo.etunimi != poistettavaHenkilo.etunimi && henkilo.sukunimi != poistettavaHenkilo.sukunimi && henkilo.ika != poistettavaHenkilo.ika
      //return henkilo !== poistettavaHenkilo
    }))
  };

  return (
    <div className="App">
      <div className="uusiHenkilo">
        <input type="text" placeholder="Etunimi"  name="etunimi" value={etunimi} onChange={handleChangeEtunimi}/>
        <input type="text" placeholder="Sukunimi" name="sukunimi" value={sukunimi} onChange={handleChangeSukunimi}/>
        <input type="number" placeholder="Ikä" name="ika" value={ika} onChange={handleChangeIka}/>
        <button onClick={addHenkilo}>Lisää henkilö</button>
      </div>
      <div className="henkiloLista">
        <HenkiloLista henkiloLista={henkiloLista} poistaHenkilo={poistaHenkilo}/>
      </div>
    </div>
  );
}

export default App;
