import ClassicGuessSlot from "../components/ClassicGuessSlot.jsx"

function ClassicGuess(props) {
    return(
        <div className="classic-guess-container">
            <ClassicGuessSlot content="Mana" correct={false}></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana" correct={false} arrowUp={true}></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana" correct={false} arrowDown={true}></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana" correct={true}></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
        </div>
    );
}

export default ClassicGuess