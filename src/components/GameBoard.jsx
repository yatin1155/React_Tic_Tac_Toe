import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({ activePlayer, handleActivePlayer }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((PrevGameBoard) => {
            const updatedBoard = [...PrevGameBoard.map(indexArray => [...indexArray])];
            updatedBoard[rowIndex][colIndex] = activePlayer;
            return updatedBoard
        })
        handleActivePlayer();
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}