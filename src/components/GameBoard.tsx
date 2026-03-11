import type {Board} from './types';

type gameBoardProps = {
onSelectSquare: () => void;
board: Board
}

const GameBoard:React.FC<gameBoardProps> = ({onSelectSquare, board}) => {

    return (
        <ol id="game-board">
            {board.map((board.board., rowIndex) => (
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

export default GameBoard;