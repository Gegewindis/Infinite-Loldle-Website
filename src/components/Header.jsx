import { Link } from "react-router-dom"

function Header() {
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
                </ul>
            </nav>
        </header>
    );
}

export default Header