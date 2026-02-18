function LeaderboardUserSlot(props) {
    return (
        <div className="leaderboard-user-slot">
            <h3>{props.position}</h3>
            <h3>{props.username}</h3>
            <h3>{props.points}</h3>
            <h3>{props.lastPlayed}</h3>
        </div>
    )
}

export default LeaderboardUserSlot