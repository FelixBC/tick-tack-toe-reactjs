import { gameTurnsProps } from "./types";

type logProps = {
  turns: gameTurnsProps;
};
const Log: React.FC<logProps> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {" "}
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};
export default Log;
