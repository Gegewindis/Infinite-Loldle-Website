function ClassicGuessSlot(props) {
    let backgroundStyle;

    if (props.correct == null) {
        backgroundStyle = {backgroundColor: "transparent"}
    } else if (props.correct) {
        backgroundStyle = {backgroundColor: "var(--color-correct)"}
    } else {
        backgroundStyle = {backgroundColor: "var(--color-incorrect)"}
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