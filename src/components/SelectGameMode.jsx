import Gamemode from "../components/Gamemode.jsx"

function SelectGamemode() {
    return(
        <div className="select-gamemode-container">
            <Gamemode gamemode="Classic" adress="/infinite-loldle/classic"></Gamemode>
            <Gamemode gamemode="Quote" adress="/infinite-loldle/quote"></Gamemode>
            <Gamemode gamemode="Ability" adress="/infinite-loldle/ability"></Gamemode>
        </div>
    );
}

export default SelectGamemode