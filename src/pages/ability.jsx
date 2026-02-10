import { useState } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"

function Ability() {
    const [items, setItems] = useState([]);

    const addItem = (query) => {
        setItems((prev) => [...prev, query]);
    };

    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
        </>
    )
}

export default Ability