import Header from "../components/Header.jsx"
import SelectGameMode from "../components/SelectGameMode.jsx"
import { useEffect } from "react";

function Home() {

    useEffect(() => {
    fetch("http://localhost:8000/api/test/")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }, []);
    
    return (
        <>
            <Header></Header>
            <SelectGameMode></SelectGameMode>

        </>
    )

}

export default Home