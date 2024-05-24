import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Logs from "./components/Logs"
import { WINNING_COMBINANTIONS } from "../winning-combinations"
import GameOver from "./components/GameOver"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {

  const [gameTurns, setGameTurns] = useState([])
  // const [hasWinners, setHasWinners] = useState(false)
  // const [activePlayer, SetActivePlayer] = useState('X')

  const activePlayer = derivedActivePlayer(gameTurns)

  // Game Board
  let gameBoard = [...initialGameBoard.map(indexArray => [...indexArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }

  let winner;
  for (const combinantion of WINNING_COMBINANTIONS) {
    const firstSquareSymbol = gameBoard[combinantion[0].row][combinantion[0].col];
    const secondSquareSymbol = gameBoard[combinantion[1].row][combinantion[1].col];
    const thirdSquareSymbol = gameBoard[combinantion[2].row][combinantion[2].col];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  const hasDraw = gameTurns.length === 9 & !winner;

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

  const restart = () => {
    setGameTurns([])
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}></Player>
          <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}></Player>
        </ol>
        {(winner || hasDraw) ? <GameOver winner={winner} restart={restart}></GameOver> : ''}
        <GameBoard gameBoard={gameBoard} onSelectSqare={handleActivePlayer}></GameBoard>
      </div>

      <Logs turns={gameTurns} ></Logs>
    </>
  )
}

export default App
