function LeaderboardUserSlot(props) {
    return (
        <div className="leaderboard-user-slot">
            <h3 className="leaderboard-index">{"#" + props.position}</h3>
            <h3 className="leaderboard-username">{props.username}</h3>
            <h3 className="leaderboard-points">{props.points} <br /> points</h3>
            <h3 className="leaderboard-last-played">{"Last played: " + props.lastPlayed}</h3>
        </div>
    )
}

export default LeaderboardUserSlot