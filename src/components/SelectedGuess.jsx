function SelectedGuess(props) {
    let text = props.guess

    return (
        <>
        <div className="selected-guess-container">
            <h3>{props.title}</h3>
            <h2>{text}</h2>
        </div>
        </>
    )

}

export default SelectedGuess