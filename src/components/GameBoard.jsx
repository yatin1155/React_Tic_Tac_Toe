import { useState } from "react"



export default function GameBoard({ onSelectSqare, gameBoard }) {




    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((PrevGameBoard) => {
    //         const updatedBoard = [...PrevGameBoard.map(indexArray => [...indexArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayer;
    //         return updatedBoard
    //     })
    //     handleActivePlayer();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectSqare(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button></li>)}
                </ol>
            </li >)
            }
        </ol >
    )
}