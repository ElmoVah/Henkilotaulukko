import React, { useState, ChangeEvent } from "react";
import { IHenkilo } from "../Interfaces";

interface Props {
    lopetaTietojenMuokkaus(): void;
    paivitaTiedot(henkilo: IHenkilo, uusiHenkilo: IHenkilo): void;
    henkilo: IHenkilo;
}

const TietojenPaivitys = ( { lopetaTietojenMuokkaus, paivitaTiedot, henkilo }: Props ) => {

    const [etunimi, setEtunimi] = useState<string>("");
    const [sukunimi, setSukunimi] = useState<string>("");
    const [ika, setIka] = useState<number>(0);

    
  const handleChangeEtunimi = (event: ChangeEvent<HTMLInputElement>): void => {
    setEtunimi(event.target.value);
  };

  const handleChangeSukunimi = (event: ChangeEvent<HTMLInputElement>): void => {
    setSukunimi(event.target.value);
  };

  const handleChangeIka = (event: ChangeEvent<HTMLInputElement>): void => {
    setIka(Number(event.target.value));
  };

    return (
        <tr key={"Jee"}>
            <td><input type="text" placeholder="Etunimi"  name="etunimi" value={etunimi} onChange={handleChangeEtunimi}/></td>
            <td><input type="text" placeholder="Sukunimi" name="sukunimi" value={sukunimi} onChange={handleChangeSukunimi}/></td>
            <td><input type="number" placeholder="Ikä" name="ika" value={ika} onChange={handleChangeIka}/></td>
            <td><button onClick={() => {paivitaTiedot(henkilo, {etunimi: etunimi, sukunimi: sukunimi, ika: ika})}}>Päivitä tiedot</button></td>
            <td><button onClick={() => { lopetaTietojenMuokkaus() }}>Peruuta</button></td>
        </tr>
    );
}

export default TietojenPaivitys
