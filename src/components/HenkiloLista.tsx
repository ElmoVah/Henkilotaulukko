import React from "react";
import { IHenkilo } from "../Interfaces";
import TietojenPaivitys from "./TietojenPaivitys";

interface Props {
    henkiloLista: IHenkilo[];
    poistaHenkilo(poistettavaHenkilo: IHenkilo): void;
    muutaTietoja(henkilo: IHenkilo): void;
    tietojenMuokkaus: boolean;
    muokattavaHenkilo?: IHenkilo;
    lopetaTietojenMuokkaus(): void;
    paivitaTiedot(henkilo: IHenkilo, uusiHenkilo: IHenkilo): void; 
}

const HenkiloLista = ({ henkiloLista, poistaHenkilo, muutaTietoja, tietojenMuokkaus, muokattavaHenkilo, lopetaTietojenMuokkaus, paivitaTiedot }: Props) => {
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
                {henkiloLista.map((henkilo: IHenkilo, key: number ) => (
                    <>
                        <tr key={key}>
                            <td>{henkilo.etunimi}</td>
                            <td>{henkilo.sukunimi}</td>
                            <td>{henkilo.ika}</td>
                            <td><button onClick={() => { poistaHenkilo(henkilo) }}>Poista</button></td>
                            <td><button onClick={() => { muutaTietoja(henkilo) }}>Muuta</button></td>
                        </tr>
                        {henkilo === muokattavaHenkilo && tietojenMuokkaus ?
                            <TietojenPaivitys { ...{lopetaTietojenMuokkaus, paivitaTiedot, henkilo} }/> : null}
                    </>
                ))}
            </tbody>
        </table>
    );
}

export default HenkiloLista;