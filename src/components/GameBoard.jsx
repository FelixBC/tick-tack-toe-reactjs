
// what I need to do, make the mark, the selection on the GameBoard selectedPlayer is move to the other player.
// So player is what has the problem.
// Let's go check player
// Now I am noticing that the player symbol is having an issue its 0,0 but it should not be able to click after the location 0,0
// has been taken
// whats happening has to do with this. when it gets full, you start to give it back entirely in the log


export default function GameBoard({onSelectSquare, board}) {

    return (
        <ol id="game-board">
            {board.map((player, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {player.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );


}