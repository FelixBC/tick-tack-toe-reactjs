export type Player = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (playerSymbol: string, playerName: string) => void;
};



export type Board = {
  board: [
    symbol: string,
    symbol: string,
    symbol: string,

    symbol: string,
    symbol: string,
    symbol: string,

    symbol: string,
    symbol: string,
    symbol: string,
  ];
};
