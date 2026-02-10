import Gamemode from "../components/Gamemode.jsx"

function SelectGamemode() {
    return(
        <div className="select-gamemode-container">
            <Gamemode gamemode="Classic" adress="/infinite-loldle/classic"></Gamemode>
            <Gamemode gamemode="Quote"></Gamemode>
            <Gamemode gamemode="Ability"></Gamemode>
        </div>
    );
}

export default SelectGamemode