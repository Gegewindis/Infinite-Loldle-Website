import { useState, useEffect } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import SelectedVariable from "../components/SelectedGuess.jsx"
import Guess from "../components/Guess.jsx"

function Ability() {
    const correctGuess = "Zed"
    const [complete, setComplete] = useState(false);
    const [items, setItems] = useState([]);

    const addItem = (query) => {
        if (complete) return;
        if (query === correctGuess) {setComplete(true)};
        setItems((prev) => [...prev, [query, (query === correctGuess) ? "true" : "false"]]);
    };

    useEffect(() => {
    fetch("http://localhost:8000/api/get_random_ability/")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }, []);

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