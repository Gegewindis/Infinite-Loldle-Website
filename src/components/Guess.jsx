

function Guess(props) {
    return (
        <>
        <div className="guess-container">
            <h3 style={{color: (props.correct === 'true') ? "var(--color-correct)" : "var(--color-incorrect"}}>{props.champGuess}</h3>
        </div>
        </>
    );

};

export default Guess