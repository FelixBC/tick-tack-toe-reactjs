type gameOverProps = {
  winner: string | null;
  onRestart: () => void;
};

const GameOver:React.FC<gameOverProps> = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
