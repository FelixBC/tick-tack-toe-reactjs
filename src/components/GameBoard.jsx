import {useState} from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    return (
        <ol id="game-board">
        {initialGameBoard.map((player, rowIndex) => (
            <li key={rowIndex}>
            <ol>
                {player.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                    <button>{playerSymbol}</button>
                </li>
                    ))}
            </ol>
        </li>
            ))}
    </ol>
    );


}