import { useState, useEffect } from "react";

import Header from "../components/Header.jsx"
import InputGuess from "../components/InputGuess.jsx"
import SelectedVariable from "../components/SelectedGuess.jsx"
import Guess from "../components/Guess.jsx"
import Victory from "../components/Victory.jsx"

function Ability() {
    const [correctGuess, setCorrectGuess] = useState("")
    const [ability, setAbility] = useState("")
    const [complete, setComplete] = useState(false);
    const [items, setItems] = useState([]);
    const [points, setPoints] = useState(0)
    const startingTime = Date.now()
    const basePoints = 1000

    const emptyStyle = {
        height: "200px"
    }

    const fetch_guess = async (name) => {
        const url = new URL("http://localhost:8000/api/check_existing_champ/")
        url.searchParams.append("name", name)

        return fetch(url)
            .then(res => res.json())
            .then(data => data.message)
    }

    const addItem = async (query) => {
        if (complete) return;
        console.log(correctGuess) // TEST

        const existingName = await fetch_guess(query)
        if (!existingName) return;

        if (query === correctGuess) {
            const username = localStorage.getItem("token")
            const resPoints = basePoints - (basePoints/20) * items.length - Math.trunc((Date.now() - startingTime)/1000)

            setComplete(true) 
            setPoints(resPoints)

            if (username) {
                fetch("http://localhost:8000/api/update_user_points/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, resPoints})
                })   
                    .then(res => res.json())       
                    .then(data => console.log(data.message))
            }
            
        }
        setItems((prev) => [...prev, [query, (query === correctGuess) ? "true" : "false"]]);
    };

    useEffect(() => {
    fetch("http://localhost:8000/api/get_random_ability/")
        .then(res => res.json())
        .then(data => {setAbility(data.message[0][0]); setCorrectGuess(data.message[0][2])})
    }, []);


    console.log(correctGuess)
    return (
        <>
            <Header></Header>
            <InputGuess onSubmit={addItem}></InputGuess>
            <SelectedVariable title="Which champ has" guess={ability}></SelectedVariable>
            <div className="arrow"></div>
            {items.map((values, index) => (
                <Guess key={index} champGuess={values[0]} correct={values[1]}/>
            ))}
            <div>{complete ? <Victory points={points}/> : ""}</div>
            <div style={emptyStyle}></div>
        </>
    )
}

export default Ability