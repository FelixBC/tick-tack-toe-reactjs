import Player from "./components/Player.tsx";
import GameBoard from "./components/GameBoard.tsx";
import { useState } from "react";
import Log from "./components/Log.tsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.ts";
import GameOver from "./components/GameOver.tsx";
import { Board } from "./components/types.ts";

type PlayersNameProps = {
  X: string;
  O: string;
};

const PLAYERS: PlayersNameProps = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD: Board | null[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type turnProps = {
  square: squareProps;
  player: PlayersNameProps;
};

type squareProps = {
  row: number;
  col: number;
};

type gameTurnsProps = [
  player: PlayersNameProps,
  square: squareProps,
  turn: turnProps,
];

function derivedActivePlayer(gameTurns: gameTurnsProps) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].X === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function derivedGameBoard(gameTurns: gameTurnsProps) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn; // destruct turn to use it down
    const { row, col } = square; // destruct square from turn to use it down too.
    gameBoard[row][col] = player; // this is an array arrays can be accessed by row col like this.
  }
  return gameBoard;
}

function derivedWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState({ PLAYERS });
  const [gameTurns, setGameTurns] = useState<gameTurnsProps>([]);

  const activePlayer = derivedActivePlayer(gameTurns);
  const gameBoard = derivedGameBoard(gameTurns);
  const winner = derivedWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);

      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
