import Header from "../components/Header.jsx"
import LeaderboardUserSlot from "../components/LeaderboardUserSlot.jsx"
import { useState, useEffect } from "react"

function Leaderboard() {
    const [items, setItems] = useState([]);
    const token = localStorage.getItem("token")
    const activeUser = (token) ? token : "Unknown user"
    const [rank, setRank] = useState("???")

    useEffect(() => {
    fetch("http://localhost:8000/api/get_leaderboard_info/")
        .then(res => res.json())
        .then(data => {
            console.log(data.message)
            setItems(data.message)
            if (data.message.findIndex(user => user[0] === token) != -1) {setRank(data.message.findIndex(user => user[0] === token))}
        })
    }, []);
    
    return(
        <>
        <Header></Header>
        <div className="leaderboard-container">
            <div className="leaderboard-user-container"><h2>{activeUser}</h2><h3>#{rank}</h3></div>
            <div className="leaderboard-board-container">

            {items.map((user, index) => (
                <LeaderboardUserSlot
                key={index}
                position={index}
                username={user[0]} 
                points={user[1]}
                lastPlayed={user[2]} />
            ))}
            </div>
        </div>
        </>
    )
}

export default Leaderboard