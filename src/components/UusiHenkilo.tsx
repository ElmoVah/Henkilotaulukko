import React, { useState, ChangeEvent } from "react";
import { IHenkilo } from "../Interfaces";
import '../App.css';

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

    //Lisää uuden henkilön taulukkoon
    const handleClickLisaaHenkilo = (): void => {
        if (etunimi !== "" && sukunimi !== "") {
            addHenkilo({ etunimi: etunimi, sukunimi: sukunimi, ika: ika });
            setEtunimi("");
            setSukunimi("");
            setIka(0);
        }
    }

    return (
        <div className="UusiHenkilo">
            <h1>Lisää uusi henkilö taulukkoon:</h1>
            <div className="LisaaLomakkeenOsa">
                <span>Etunimi:</span>
                <input
                    type="text"
                    placeholder="Etunimi"
                    name="etunimi" value={etunimi}
                    onChange={handleChangeEtunimi}
                />
            </div>
            <div className="LisaaLomakkeenOsa">
                <span>Sukunimi:</span>
                <input
                    type="text"
                    placeholder="Sukunimi"
                    name="sukunimi"
                    value={sukunimi}
                    onChange={handleChangeSukunimi}
                />
            </div>
            <div className="LisaaLomakkeenOsa">
                <span>Ikä:</span>
                <input
                    type="number"
                    placeholder="Ikä"
                    name="ika" value={(ika === 0) ? "" : ika}
                    onChange={handleChangeIka}
                />
            </div>
            <button
                id="LisaaNappi"
                onClick={() => { handleClickLisaaHenkilo() }}
            >
                Lisää henkilö
            </button>
        </div>
    );
}

export default UusiHenkilo