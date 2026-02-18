import { useState, useEffect } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import ClassicGuess from "../components/ClassicGuess.jsx"
import ClassicSlotDesc from "../components/ClassicSlotTitle.jsx"
import Victory from "../components/Victory.jsx"

function Classic() {
    const [items, setItems] = useState([]);
    const [complete, setComplete] = useState(false);

    const emptyStyle = {
        height: "200px"
    }

        const addItem = (query) => {
        setItems((prev) => [...prev, query]);
    };

    useEffect(() => {
    fetch("http://localhost:8000/api/get_random_champ/")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
            <ClassicSlotDesc></ClassicSlotDesc>
            <hr className="classic-underline"/>
            {items.map((query, index) => (
                <ClassicGuess key={index} />
            ))}
            <div>{complete ? <Victory points="100"/> : ""}</div>
            <div style={emptyStyle}></div>
        </>
    )
}

export default Classic