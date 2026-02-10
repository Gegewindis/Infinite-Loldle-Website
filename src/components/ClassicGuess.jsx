import ClassicGuessSlot from "../components/ClassicGuessSlot.jsx"

function ClassicGuess(props) {
    const correct = {backgroundColor: "var(--color-correct)"}
    const incorrect = {backgroundColor: "var(--color-incorrect)"}

    return(
        <div className="classic-guess-container">
            <ClassicGuessSlot content="Mana" containerStyle={correct}></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana" containerStyle={incorrect}></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
            <ClassicGuessSlot content="Mana"></ClassicGuessSlot>
        </div>
    );
}

export default ClassicGuess