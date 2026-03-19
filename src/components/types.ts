export type Cell = null | "X" | "O";

export type Row = [Cell, Cell, Cell];

export type Board = [Row, Row, Row];

export type playerSymbol = "X" | "O";

export type squareProps = {
  row: number;
  col: number;
};

export type gameTurnProps = {
  square: squareProps;
  player: Cell;
};

export type gameTurnsProps = gameTurnProps[];
