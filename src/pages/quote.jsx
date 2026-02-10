import { useState } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import SelectedQuote from "../components/SelectedQuote.jsx"
import QuoteGuess from "../components/QuoteGuess.jsx"

function Quote() {
    const correctGuess = "Ornn"
    const [items, setItems] = useState([]);

    const addItem = (query) => {
        setItems((prev) => [...prev, [query, (query === correctGuess) ? "true" : "false"]]);
    };

    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
            <SelectedQuote></SelectedQuote>
            <div className="arrow"></div>
            {items.map((values, index) => (
                <QuoteGuess key={index} champGuess={values[0]} correct={values[1]}/>
            ))}
        </>
    )
}

export default Quote