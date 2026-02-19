function ClassicGuessSlot(props) {
    let backgroundStyle;

    if (props.correct == null) {
        backgroundStyle = {backgroundColor: "var(--color-ishcorrect)"}
        
    } else if (props.correct == "transparent") {
        backgroundStyle = {backgroundColor: "transparent"}
        
    } else if (!props.correct) {
        backgroundStyle = {backgroundColor: "var(--color-incorrect)"}

    } else if (props.correct) {
        backgroundStyle = {backgroundColor: "var(--color-correct)"}
    }

    return(
        <div className="classic-guess-slot-container" style={props.containerStyle}>
            <h2>{props.content} </h2>
            <div className="classic-slot-background" style={backgroundStyle}></div>
            {props.arrowUp ? <div>
                <div className="classic-slot-arrow-up"></div>
                <div className="classic-slot-arrow-body-up"></div>
            </div> : null}
            {props.arrowDown ? <div>
                <div className="classic-slot-arrow-down"></div>
                <div className="classic-slot-arrow-body-down"></div>
            </div> : null}

            
        </div>
    );
}

export default ClassicGuessSlot