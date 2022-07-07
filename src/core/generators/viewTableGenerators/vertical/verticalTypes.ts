import { CellMap } from '../cellTypes';
import IViewInterval from '../../../model/viewInterval';
import ITime from '../../../model/time';

type TVerticalColumnMap = Record<number, IVerticalColumn>;

interface IVerticalGeneratorParams {
  viewInterval: IViewInterval;
  cellDurationInMinutes: number;
}

interface IVerticalColumn {
  startDateMs: number;
  endDateMs: number;
  cellMap: CellMap;
}

interface IVerticalViewTable {
  columns: TVerticalColumnMap;
  rowsTime: ITime[];
}

export type {
  TVerticalColumnMap,
  IVerticalGeneratorParams,
  IVerticalColumn,
  IVerticalViewTable,
  ITime,
};
