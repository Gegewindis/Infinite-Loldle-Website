import { useState, useEffect } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import ClassicGuess from "../components/ClassicGuess.jsx"
import ClassicSlotDesc from "../components/ClassicSlotTitle.jsx"
import Victory from "../components/Victory.jsx"

function Classic() {
    const [items, setItems] = useState([]);
    const [points, setPoints] = useState(0)
    const [complete, setComplete] = useState(false);
    const [correctInfo, setCorrectInfo] = useState("")
    const startingTime = Date.now()
    const basePoints = 1000

    const emptyStyle = {
        height: "200px"
    }

    const fetch_guess = async (name) => {
        const url = new URL("http://localhost:8000/api/get_champ_info/")
        url.searchParams.append("name", name)

        return fetch(url)
            .then(res => res.json())
            .then(data => data.message)
    }

    const addItem = async (query) => {
        const guessInfo = await fetch_guess(query)
        if (guessInfo == null) {return}
        if (guessInfo[0] == correctInfo[0]) {setComplete(true); setPoints(basePoints - (basePoints/20) * items.length - Math.trunc((Date.now() - startingTime)/1000))}
        if (guessInfo[0].length > 7 && !guessInfo[0].includes(" ")) {guessInfo[0] = guessInfo[0].slice(0, 7) + "- " + guessInfo[0].slice(7)}

        console.log(correctInfo) // TEST

        setItems((prev) => [...prev, guessInfo]);
    };

    useEffect(() => {
    fetch("http://localhost:8000/api/get_random_champ/")
        .then(res => res.json())
        .then(data => setCorrectInfo(data.message))
    }, []);

    const checkMatch = (guessString, correctString) => {
        if (guessString === correctString) return true;

        const parts = guessString.split(" ");
        const hasPartialMatch = parts.some(part => correctString.includes(part));

        return hasPartialMatch ? null : false;
    }

    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
            <ClassicSlotDesc></ClassicSlotDesc>
            <hr className="classic-underline"/>

            {items.map((guessInfo, index) => {

                return <ClassicGuess 
                key={index}
                name={guessInfo[0]}
                gender={guessInfo[1]}
                rangeType={guessInfo[2]}
                resource={guessInfo[3]}
                releaseYear={guessInfo[4]}
                region={guessInfo[5]}
                position={guessInfo[6]}
                species={guessInfo[7]}
                correctName={guessInfo[0] == correctInfo[0]}
                correctGender={guessInfo[1] == correctInfo[1]}
                correctPosition={checkMatch(guessInfo[6], correctInfo[6])}
                correctSpecies={checkMatch(guessInfo[7], correctInfo[7])}
                correctResource={guessInfo[3] == correctInfo[3]}
                correctRangeType={guessInfo[2] == correctInfo[2]}
                correctRegion={checkMatch(guessInfo[5], correctInfo[5])}
                correctReleaseYear={guessInfo[4] == correctInfo[4]}
                arrowUp={guessInfo[4] < correctInfo[4]}
                arrowDown={guessInfo[4] > correctInfo[4]}
                />
            })}

            <div>{complete ? <Victory points={points}/> : ""}</div>
            <div style={emptyStyle}></div>
        </>
    )
}

export default Classic