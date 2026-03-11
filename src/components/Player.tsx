import { useState } from "react";
import type {Player} from './types'
type playerProps = {
  player: Player
}


const Player: React.FC<playerProps> = ({player}) => {
 
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(player.initialName);

  function handleEditable() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      player.onChangeName(player.symbol, playerName);
    }
  }

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName} </span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li className={player.isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button onClick={handleEditable}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
export default Player;