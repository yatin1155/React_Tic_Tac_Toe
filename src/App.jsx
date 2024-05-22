import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
function App() {


  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player name='Player 1' symbol='X'></Player>
          <Player name='Player 2' symbol='o'></Player>
        </ol>

        <GameBoard></GameBoard>
      </div>

      Result
    </>
  )
}

export default App
