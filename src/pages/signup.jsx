import Header from "../components/Header.jsx"
import { useState } from "react" 
import { Link, useNavigate } from "react-router-dom"

function SignUp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [email, setEmail] = useState("")
    const [userMessage, setUserMessage] = useState("")
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        const url = new URL("http://localhost:8000/api/register_user/")

        if (username == "" || password == "" || rePassword == "" || email == "") {
            setUserMessage("Please fill out all the fields!")

            } else if (password != rePassword) {
            setUserMessage("Passwords not matching!")

            } else if (email.indexOf('@') == -1){
            setUserMessage("Not a valid email adress!")

            } else {
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, email})
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message == "User logged in successfully") {
                        localStorage.setItem("token", username)
                        navigate('/infinite-loldle/');
                    } else {
                        setUserMessage(data.message)
                    }
                })
                .catch(err => console.error(err));
            }

    }

    // Using the same template as login, might want to change the names for it to fit better

    return (

        <>
            <Header></Header>
            <div className="login-container">
                <div className="login-title-container">
                    <label>Create an account!</label>
                    <p>{userMessage}</p>
                </div>
                <form onSubmit={handleSubmit} className="login-fill-form">
                    <h3>Username</h3>
                    <input type="text" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <h3>Password</h3>
                    <input type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <h3>Repeat Password</h3>
                    <input type="password" placeholder="Your password" value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
                    <h3>Email</h3>
                    <input type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className="login-submit-container">
                        <p> Already have an account?
                            <Link to="/infinite-loldle/login" className="login-sign-up-link"> Login</Link>
                        </p>
                        <button type="submit">Sign up</button>
                    </div>
                </form>

            </div>

        </>
    )

}

export default SignUp