import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs"

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {

  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, SetActivePlayer] = useState('X')

  const activePlayer = derivedActivePlayer(gameTurns)

  const handleActivePlayer = (rowIndex, colIndex) => {

    setGameTurns((prevTurn) => {
      let currentPlayer = derivedActivePlayer(prevTurn)
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

      <Logs turns={gameTurns} ></Logs>
    </>
  )
}

export default App
