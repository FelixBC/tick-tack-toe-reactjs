import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {

    return(
    <main>
        <div id="game-container">
            <ol id="players">
                <Player initialName= "Player 1" symbol="X" />
            </ol>
            <GameBoard />
        </div>
    </main>
    )
}

export default App
