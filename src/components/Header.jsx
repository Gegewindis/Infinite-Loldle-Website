import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Header() {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const labelText = ((token) ? "Sign Out" : "Login") // THE TOKEN RIGHT NOW IS ONLY THE USERNAME, VERY UNSAFE
    const currFunction = ((token) ? SignOut : LogIn)
    const navigate = useNavigate()

    function LogIn() {
        navigate("/infinite-loldle/login/")
    }

    function SignOut() {
        localStorage.removeItem("token")
        setToken(null)
    }

    return(
        
        <header>
            <div className="header-logo-container">
                <Link to="/infinite-loldle">
                    <i className="fa-solid fa-house fa-2x"></i>
                </Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <Link>Leaderboard</Link>
                    <Link>About Me</Link>
                    <label onClick={currFunction}>{labelText}</label>

                </ul>
            </nav>
        </header>
    );
}

export default Header