import React, { useState, ChangeEvent } from "react";
import { IHenkilo } from "../Interfaces";

interface Props {
    addHenkilo(henkilo: IHenkilo): void;
}

const UusiHenkilo = ({ addHenkilo }: Props) => {

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

    const handleClickLisaaHenkilo = (): void => {
        addHenkilo({ etunimi: etunimi, sukunimi: sukunimi, ika: ika });
        setEtunimi("");
        setSukunimi("");
        setIka(0);
    } 

    return (
        <div>
            <input type="text" placeholder="Etunimi" name="etunimi" value={etunimi} onChange={handleChangeEtunimi} />
            <input type="text" placeholder="Sukunimi" name="sukunimi" value={sukunimi} onChange={handleChangeSukunimi} />
            <input type="number" placeholder="Ikä" name="ika" value={ika} onChange={handleChangeIka} />
            <button onClick={() => { handleClickLisaaHenkilo() }}>Lisää henkilö</button>
        </div>
    );
}

export default UusiHenkilo