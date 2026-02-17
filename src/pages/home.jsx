import Header from "../components/Header.jsx"
import SelectGameMode from "../components/SelectGameMode.jsx"

function Home() {
    return (
        <>
            <Header></Header>
            <div className="title-container">Infinite Loldle</div>
            <SelectGameMode></SelectGameMode>

        </>
    )

}

export default Home