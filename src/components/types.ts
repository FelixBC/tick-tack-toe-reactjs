export type Player = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (playerSymbol: string, playerName: string) => void;
};
