interface ICell {
  startDateMs: number;
  endDateMs: number;
}

type CellMap = Record<number, ICell>;

export type { ICell, CellMap };
