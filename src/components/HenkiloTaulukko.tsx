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

    //Kutsutaan kun käyttäjä alkaa muokkaamaan taulukkoon jo tallennetutn henkilön tietoja
    const muutaTietoja = (henkilo: IHenkilo): void => {
        setMuokattavaHenkilo(henkilo);
        setTietojenMuokkaus(true);
    }

    //Kutsutaan kun käyttäjä painaa päivitä nappia. Päivittää tiedot taulukkoon.
    const paivitaTiedot = (henkilo: IHenkilo, uusiHenkilo: IHenkilo): void => {
        paivitaHenkilo(henkilo, uusiHenkilo);
        setTietojenMuokkaus(false);
    }

    //Järjestää taulukon etunimen perusteella
    const jarjestaEtunimi = (): void => {
        const uusiHenkiloLista = [...henkiloLista];
        uusiHenkiloLista.sort(compareEtunimi);
        paivitaHenkiloLista(uusiHenkiloLista);
    }

    //Järjestää taulukon sukunimen perusteella
    const jarjestaSukunimi = (): void => {
        const uusiHenkiloLista = [...henkiloLista];
        uusiHenkiloLista.sort(compareSukunimi);
        paivitaHenkiloLista(uusiHenkiloLista);
    }

    //Järjestää taulukon Iän perusteella
    const jarjestaIka = (): void => {
        const uusiHenkiloLista = [...henkiloLista];
        uusiHenkiloLista.sort(compareIka);
        paivitaHenkiloLista(uusiHenkiloLista);
    }

    function compareEtunimi(a: IHenkilo, b: IHenkilo) {
        if (a.etunimi.toLocaleLowerCase() < b.etunimi.toLocaleLowerCase()) {
            return -1;
        }
        if (a.etunimi.toLocaleLowerCase() > b.etunimi.toLocaleLowerCase()) {
            return 1;
        }
        return 0;
    }

    function compareSukunimi(a: IHenkilo, b: IHenkilo) {
        if (a.sukunimi.toLocaleLowerCase() < b.sukunimi.toLocaleLowerCase()) {
            return -1;
        }
        if (a.sukunimi.toLocaleLowerCase() > b.sukunimi.toLocaleLowerCase()) {
            return 1;
        }
        return 0;
    }

    function compareIka(a: IHenkilo, b: IHenkilo) {
        if (a.ika < b.ika) {
            return -1;
        }
        if (a.ika > b.ika) {
            return 1;
        }
        return 0;
    }

    return (
        <div className="HenkiloLista">
            <table>
                <caption>Henkilöt</caption>
                <thead>
                    <tr>
                        <th className="KolumniOtsikko">
                            <button
                                className="KolumniJarjestaNappi"
                                onClick={() => jarjestaEtunimi()}
                            >
                                Etunimi
                            </button>
                        </th>
                        <th className="KolumniOtsikko">
                            <button
                                className="KolumniJarjestaNappi"
                                onClick={() => jarjestaSukunimi()}
                            >
                                Sukunimi
                            </button>
                        </th>
                        <th className="KolumniIka">
                            <button
                                className="KolumniJarjestaNappi"
                                onClick={() => jarjestaIka()}
                            >
                                Ikä
                            </button>
                        </th>
                        <th className="KolumniNappi"></th>
                        <th className="KolumniNappi"></th>

                    </tr>
                </thead>
                <tbody>
                    {henkiloLista.map((henkilo: IHenkilo, key: number) => (
                        <React.Fragment key={key}>
                            {!tietojenMuokkaus || henkilo !== muokattavaHenkilo ? 
                            <tr>
                                <td className="KolumniTeksti">
                                    {henkilo.etunimi}
                                </td>
                                <td className="KolumniTeksti">
                                    {henkilo.sukunimi}
                                </td>
                                <td className="KolumniIka">
                                    {henkilo.ika}
                                </td>
                                <td className="KolumniNappi">
                                    <button
                                        className="RiviNappi"
                                        onClick={() => { poistaHenkilo(henkilo) }}
                                    >
                                        Poista
                                    </button>
                                </td>
                                <td className="KolumniNappi">
                                    <button
                                        className="RiviNappi"
                                        onClick={() => { muutaTietoja(henkilo) }}
                                    >
                                        Muuta
                                    </button>
                                </td>
                            </tr> : null}
                            {henkilo === muokattavaHenkilo && tietojenMuokkaus ?
                                <TietojenPaivitys {...{ lopetaTietojenMuokkaus, paivitaTiedot, henkilo }} /> : null}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HenkiloLista;