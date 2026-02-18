import Header from "../components/Header.jsx"
import { useState } from "react" 
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userMessage, setUserMessage] = useState("")
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        const url = new URL("http://localhost:8000/api/login_user/")

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password})
        })
            .then(res => res.json())
            .then(data => {
                if (data.message == "User logged in successfully") {
                    localStorage.setItem("token", username)
                    navigate('/infinite-loldle/');
                } else {
                    setUserMessage("Please try again!")
                }
            })
            .catch(err => console.error(err));
    }


    return (

        <>
            <Header></Header>
            <div className="login-container">
                <div className="login-title-container">
                    <label>Login to your account</label>
                    <p>{userMessage}</p>
                </div>
                <form onSubmit={handleSubmit} className="login-fill-form">
                    <h3>Username</h3>
                    <input type="text" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <h3>Password</h3>
                    <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="login-submit-container">
                        <p> Don't have an account? 
                            <Link to="/infinite-loldle/sign_up" className="login-sign-up-link"> Sign up</Link>
                        </p>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>

        </>
    )

}

export default Login