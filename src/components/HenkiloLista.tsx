import React, { useState } from "react";
import { IHenkilo } from "../Interfaces";
import TietojenPaivitys from "./TietojenPaivitys";

interface Props {
    henkiloLista: IHenkilo[];
    poistaHenkilo(poistettavaHenkilo: IHenkilo): void;
    paivitaHenkilo(henkilo: IHenkilo, uusiHenkilo: IHenkilo): void;
}

const HenkiloLista = ({ henkiloLista, poistaHenkilo, paivitaHenkilo }: Props) => {

    const [tietojenMuokkaus, setTietojenMuokkaus] = useState<boolean>(false);
    const [muokattavaHenkilo, setMuokattavaHenkilo] = useState<IHenkilo>();

    const lopetaTietojenMuokkaus = (): void => {
        setTietojenMuokkaus(false);
    }
    
    const muutaTietoja = (henkilo: IHenkilo): void => {
        setMuokattavaHenkilo(henkilo);
        setTietojenMuokkaus(true);
    }

    const paivitaTiedot = (henkilo: IHenkilo, uusiHenkilo: IHenkilo): void => {
        paivitaHenkilo(henkilo, uusiHenkilo);
        setTietojenMuokkaus(false);
    }

    return (
        <table>
            <caption>Henkilöt</caption>
            <thead>
                <tr>
                    <th>Etunimi</th>
                    <th>Sukunimi</th>
                    <th>Ikä</th>
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