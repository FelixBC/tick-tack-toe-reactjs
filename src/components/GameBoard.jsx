
// just need to always lift the state when there is opportunity to reuse the component
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