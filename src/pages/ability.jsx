import { useState } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import SelectedVariable from "../components/SelectedGuess.jsx"
import Guess from "../components/Guess.jsx"

function Ability() {
    const correctGuess = "Zed"
    const [items, setItems] = useState([]);

    const addItem = (query) => {
        setItems((prev) => [...prev, [query, (query === correctGuess) ? "true" : "false"]]);
    };

    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
            <SelectedVariable title="Which champ has" guess="Death Mark"></SelectedVariable>
            <div className="arrow"></div>
            {items.map((values, index) => (
                <Guess key={index} champGuess={values[0]} correct={values[1]}/>
            ))}
        </>
    )
}

export default Ability