export default function GameOver({ winner, restart, playerInfo }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner ? <p>{playerInfo[winner]} Won!</p> : <p>It's a draw </p>}
            <p>
                <button onClick={restart}>Rematch!</button>
            </p>
        </div>
    )
}