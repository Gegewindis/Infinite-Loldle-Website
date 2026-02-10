import { useState } from "react";

function InputGuess() {

    const [query, setQuery] = useState("");

    const handleSubmit = () => {
        console.log("User searched for:", query);
        // do your search logic here
    };


    return(
        <div className="input-guess-container">
                <h1>Guess the Champ!</h1>
                <form action={handleSubmit}>
                <input type="search" placeholder="Type champion name.." value={query} onChange={(e) => setQuery(e.target.value)}/>
                </form>
        </div>
    )
}

export default InputGuess