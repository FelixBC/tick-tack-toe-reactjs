import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx"
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function derivedActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }
    return currentPlayer;
}
function App() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = derivedActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

    for(const turn of gameTurns){
        const {square, player} = turn; // destruct turn to use it down
        const {row, col} = square; // destruct square from turn to use it down too.

        gameBoard[row][col] = player;  // this is an array arrays can be accessed by row col like this.
    }

    for (const combination of WINNING_COMBINATIONS) {
        const [firstSquare, secondSquare, thirdSquare] = combination;
        const firstValue = gameBoard[firstSquare.row][firstSquare.col];
        const secondValue = gameBoard[secondSquare.row][secondSquare.col];
        const thirdValue = gameBoard[thirdSquare.row][thirdSquare.col];
        if (firstValue && firstValue === secondValue && firstValue === thirdValue) {
            console.log(`Player ${firstValue} wins!`);
            break;
        }
    }


    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = derivedActivePlayer(prevTurns);

            return [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns,
            ];
        });
    }

return (
    <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
)
}

export default App
