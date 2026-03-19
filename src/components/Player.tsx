import { useState } from "react";
type playerProps = {
  initialName: string;
  symbol: "X" | "O";
  isActive: boolean;
  onChangeName: (playerSymbol: "X" | "O", playerName: string) => void;
};

const Player: React.FC<playerProps> = ({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(initialName);

  function handleEditable() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName} </span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditable}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
export default Player;
