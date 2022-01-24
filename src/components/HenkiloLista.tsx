import React, { useState } from "react";
import { IHenkilo } from "../Interfaces";
import TietojenPaivitys from "./TietojenPaivitys";

interface Props {
    henkiloLista: IHenkilo[];
    poistaHenkilo(poistettavaHenkilo: IHenkilo): void;
    paivitaHenkilo(henkilo: IHenkilo, uusiHenkilo: IHenkilo): void;
    paivitaHenkiloLista(jarjestettuHenkilolista: IHenkilo[]): void
}

const HenkiloLista = ({ henkiloLista, poistaHenkilo, paivitaHenkilo, paivitaHenkiloLista }: Props) => {

    const [tietojenMuokkaus, setTietojenMuokkaus] = useState<boolean>(false);
    const [muokattavaHenkilo, setMuokattavaHenkilo] = useState<IHenkilo>();

    const lopetaTietojenMuokkaus = (): void => {
        setTietojenMuokkaus(false);
    }

    const muutaTietoja = (henkilo: IHenkilo): void => {
        setMuokattavaHenkilo(henkilo);
        setTietojenMuokkaus(true);
        console.log(henkiloLista);
    }

    const paivitaTiedot = (henkilo: IHenkilo, uusiHenkilo: IHenkilo): void => {
        paivitaHenkilo(henkilo, uusiHenkilo);
        setTietojenMuokkaus(false);
    }

    const jarjestaEtunimi = (): void => {
        const uusiHenkiloLista = [...henkiloLista];
        uusiHenkiloLista.sort(compareEtunimi);
        paivitaHenkiloLista(uusiHenkiloLista);
    }

    const jarjestaSukunimi = (): void => {
        const uusiHenkiloLista = [...henkiloLista];
        uusiHenkiloLista.sort(compareSukunimi);
        paivitaHenkiloLista(uusiHenkiloLista);
    }

    const jarjestaIka = (): void => {
        const uusiHenkiloLista = [...henkiloLista];
        uusiHenkiloLista.sort(compareIka);
        paivitaHenkiloLista(uusiHenkiloLista);
    }

    function compareEtunimi(a: IHenkilo, b: IHenkilo) {
        if ( a.etunimi < b.etunimi ){
            return -1;
          }
          if ( a.etunimi > b.etunimi ){
            return 1;
          }
          return 0;
    }

    function compareSukunimi(a: IHenkilo, b: IHenkilo) {
        if ( a.sukunimi < b.sukunimi ){
            return -1;
          }
          if ( a.sukunimi > b.sukunimi ){
            return 1;
          }
          return 0;
    }

    function compareIka(a: IHenkilo, b: IHenkilo) {
        if ( a.ika < b.ika ){
            return -1;
          }
          if ( a.ika > b.ika ){
            return 1;
          }
          return 0;
    }

    return (
        <table>
            <caption>Henkilöt</caption>
            <thead>
                <tr>
                    <th>
                        <button onClick={() => jarjestaEtunimi()}>
                            Etunimi
                        </button>
                    </th>
                    <th>
                        <button onClick={() => jarjestaSukunimi()}>
                            Sukunimi
                        </button>
                    </th>
                    <th>
                        <button onClick={() => jarjestaIka()}>
                            Ikä
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {henkiloLista.map((henkilo: IHenkilo, key: number) => (
                    <>
                        <tr key={key}>
                            <td>{henkilo.etunimi}</td>
                            <td>{henkilo.sukunimi}</td>
                            <td>{henkilo.ika}</td>
                            <td><button onClick={() => { poistaHenkilo(henkilo) }}>Poista</button></td>
                            <td><button onClick={() => { muutaTietoja(henkilo) }}>Muuta</button></td>
                        </tr>
                        {henkilo === muokattavaHenkilo && tietojenMuokkaus ?
                            <TietojenPaivitys {...{ lopetaTietojenMuokkaus, paivitaTiedot, henkilo }} /> : null}
                    </>
                ))}
            </tbody>
        </table>
    );
}

export default HenkiloLista;