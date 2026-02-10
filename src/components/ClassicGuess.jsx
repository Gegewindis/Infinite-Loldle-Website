import ClassicInfoSlot from "../components/ClassicInfoSlot.jsx"

function ClassicGuess(props) {
    const correct = {backgroundColor: "var(--color-correct)"}
    const incorrect = {backgroundColor: "var(--color-incorrect)"}

    return(
        <div className="classic-guess-container">
            <ClassicInfoSlot content="Mana" containerStyle={correct}></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana" containerStyle={incorrect}></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana"></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana"></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana"></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana"></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana"></ClassicInfoSlot>
            <ClassicInfoSlot content="Mana"></ClassicInfoSlot>
        </div>
    );
}

export default ClassicGuess