import { Link } from "react-router-dom"

function Gamemode(props) {
    return(
        <Link to={props.adress}>
            <div className="gamemode-container">
                <h1>{props.gamemode}</h1>
            </div>
        </Link>
    );
}

export default Gamemode