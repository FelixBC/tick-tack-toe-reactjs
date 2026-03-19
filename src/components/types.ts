export type Player = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (playerSymbol: string, playerName: string) => void;
};

export type Cell = null | "X" | "O";

export type Row = [Cell, Cell, Cell];

export type Board = [Row, Row, Row];
