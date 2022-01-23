import React, {FC, ChangeEvent, useState} from 'react';
import { updateDefaultClause } from 'typescript';
import './App.css';
import HenkiloLista from './components/HenkiloLista';
import { IHenkilo } from './Interfaces';

const App: FC = () => {

  const [etunimi, setEtunimi] = useState<string>("");
  const [sukunimi, setSukunimi] = useState<string>("");
  const [ika, setIka] = useState<number>(0);
  const [henkiloLista, setHenkiloLista] = useState<IHenkilo[]>([]);
  const [tietojenMuokkaus, setTietojenMuokkaus] = useState<boolean>(false);
  const [muokattavaHenkilo, setMuokattavaHenkiolo] = useState<IHenkilo>();

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
    const uusiHenkilo = {etunimi: etunimi, sukunimi: sukunimi, ika: ika};
    setHenkiloLista([...henkiloLista, uusiHenkilo]);
    setSukunimi("");
    setEtunimi("");
    setIka(0);
  };

  const muutaTietoja = (henkilo: IHenkilo): void => {
    setTietojenMuokkaus(true);
    setMuokattavaHenkiolo(henkilo);
  }

  const lopetaTietojenMuokkaus = (): void => {
    setTietojenMuokkaus(false);
  }

  const paivitaTiedot = (henkilo: IHenkilo, paivitettyHenkilo: IHenkilo): void => {
    let uusiHenkiloLista = henkiloLista;
    for (let i = 0; i < uusiHenkiloLista.length; i++){
      if (uusiHenkiloLista[i] === henkilo){
        uusiHenkiloLista[i] = paivitettyHenkilo
      }
      console.log(uusiHenkiloLista[i], henkilo, paivitettyHenkilo);
    }
    setHenkiloLista(uusiHenkiloLista);
    lopetaTietojenMuokkaus();
  }

  const poistaHenkilo = (poistettavaHenkilo: IHenkilo): void => {
    setHenkiloLista(henkiloLista.filter((henkilo) => {
      return henkilo !== poistettavaHenkilo
    }))
    lopetaTietojenMuokkaus();
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
        <HenkiloLista {...{henkiloLista, poistaHenkilo, muutaTietoja, tietojenMuokkaus, muokattavaHenkilo, lopetaTietojenMuokkaus, paivitaTiedot}}/>
      </div>
    </div>
  );
}

export default App;
