import React, { useState, ChangeEvent } from "react";
import { IHenkilo } from "../Interfaces";

interface Props {
  lopetaTietojenMuokkaus(): void;
  paivitaTiedot(henkilo: IHenkilo, uusiHenkilo: IHenkilo): void;
  henkilo: IHenkilo;
}

const TietojenPaivitys = ({ lopetaTietojenMuokkaus, paivitaTiedot, henkilo }: Props) => {

  const [etunimi, setEtunimi] = useState<string>(henkilo.etunimi);
  const [sukunimi, setSukunimi] = useState<string>(henkilo.sukunimi);
  const [ika, setIka] = useState<number>(henkilo.ika);


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
    <>
      <tr>
        <td>
          <input
            className="MuutaNimiInput"
            type="text"
            placeholder="Etunimi"
            name="etunimi"
            value={etunimi}
            onChange={handleChangeEtunimi}
          />
        </td>
        <td>
          <input
            className="MuutaNimiInput"
            type="text"
            placeholder="Sukunimi"
            name="sukunimi"
            value={sukunimi}
            onChange={handleChangeSukunimi}
          />
        </td>
        <td>
          <input
            className="MuutaIkaInput"
            type="number"
            placeholder="Ikä"
            name="ika"
            value={(ika === 0) ? "" : ika}
            onChange={handleChangeIka}
          />
        </td>
        <td>
          <button
            className="RiviNappi"
            onClick={() => { paivitaTiedot(henkilo, { etunimi: etunimi, sukunimi: sukunimi, ika: ika }) }}
          >
            Päivitä
          </button>
        </td>
        <td>
          <button
            className="RiviNappi"
            onClick={() => { lopetaTietojenMuokkaus() }}
          >
            Peruuta
          </button>
        </td>
      </tr>
    </>
  );
}

export default TietojenPaivitys
