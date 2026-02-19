import ClassicGuessSlot from "../components/ClassicGuessSlot.jsx"

function ClassicGuess(props) {
    return(
        <div className="classic-guess-container">
            <ClassicGuessSlot content={props.name} correct={props.correctName}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.gender} correct={props.correctGender}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.position} correct={props.correctPosition}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.species} correct={props.correctSpecies}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.resource} correct={props.correctResource}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.rangeType} correct={props.correctRangeType}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.region} correct={props.correctRegion}></ClassicGuessSlot>
            <ClassicGuessSlot content={props.releaseYear} correct={props.correctReleaseYear} arrowUp={props.arrowUp} arrowDown={props.arrowDown}></ClassicGuessSlot>
        </div>
    );
}

export default ClassicGuess