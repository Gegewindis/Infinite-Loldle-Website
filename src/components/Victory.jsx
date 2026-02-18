import { useNavigate } from "react-router-dom";

function Victory (props) {
    const navigate = useNavigate()

    return (
        <>
        <div className="victory-container">
            <h1 className="victory-container-header">VICTORY!</h1>
            <h3>You earned a total of <b>{props.points}</b> points</h3>
            <h3>Play again?</h3>
            <div className="victory-container-restart" onClick={() => navigate(0)}><h1>Restart</h1></div>
        </div>
        </>
    );

};

export default Victory