import Header from "../components/Header.jsx"
import LeaderboardUserSlot from "../components/LeaderboardUserSlot.jsx"

function Leaderboard() {
    const token = localStorage.getItem("token")
    const activeUser = (token) ? token : "Unknown User"
    const rank = (token) ? "123" : "???" // Currently a random number, need to get from API


    
    return(
        <>
        <Header></Header>
        <div className="leaderboard-container">
            <div className="leaderboard-user-container"><h2>{activeUser}</h2><h3>#{rank}</h3></div>
            <div className="leaderboard-board-container">
                <LeaderboardUserSlot position="1" username="Larsson" points="10324 points" lastPlayed="Last played: 1975-03-21"></LeaderboardUserSlot>


            </div>
        </div>
        </>
    )
}

export default Leaderboard