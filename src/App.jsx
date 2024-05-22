import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs"

function App() {

  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, SetActivePlayer] = useState('X')
  const handleActivePlayer = (rowIndex, colIndex) => {

    SetActivePlayer((activePlayer) => activePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurn) => {
      let currentPlayer = 'X';
      if (prevTurn.length > 0 && prevTurn[0].player === 'X') {
        currentPlayer = 'O'
      }
      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer
      }, ...prevTurn];

      return updatedTurns
    })
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}></Player>
          <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}></Player>
        </ol>

        <GameBoard turns={gameTurns} onSelectSqare={handleActivePlayer}></GameBoard>
      </div>

      <Logs ></Logs>
    </>
  )
}

export default App
