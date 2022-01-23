import React from "react";
import { IHenkilo } from "../Interfaces";

interface Props {
    henkiloLista: IHenkilo[];
    poistaHenkilo(poistettavaHenkilo: IHenkilo): void; 
}

const HenkiloLista = ({ henkiloLista, poistaHenkilo }: Props) => {
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
                    <tr key={key}>
                        <td>{henkilo.etunimi}</td>
                        <td>{henkilo.sukunimi}</td>
                        <td>{henkilo.ika}</td>
                        <td><button onClick={() => {poistaHenkilo(henkilo)}}>Poista</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default HenkiloLista;