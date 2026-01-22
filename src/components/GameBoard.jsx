
// what I need to do, make the mark, the selection on the GameBoard selectedPlayer is move to the other player.
// So player is what has the problem.
// Let's go check player

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({onSelectSquare, turns}) {
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn; // destruct turn to use it down
        const {row, col} = square; // destruct square from turn to use it down too.

        gameBoard[row][col] = player;  // this is an array arrays can be accessed by row col like this.
    }

    return (
        <ol id="game-board">
            {gameBoard.map((player, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {player.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );


}