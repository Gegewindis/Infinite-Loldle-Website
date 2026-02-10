import { useState } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import ClassicGuess from "../components/ClassicGuess.jsx"
import InfoSlotName from "../components/InfoSlotName.jsx"

function Classic() {
    const [items, setItems] = useState([]);

    const addItem = (query) => {
        setItems((prev) => [...prev, query]);
    };

    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
            <InfoSlotName></InfoSlotName>
            <hr className="classic-underline"/>
            {items.map((query, index) => (
                <ClassicGuess key={index} />
            ))}
        </>
    )
}

export default Classic