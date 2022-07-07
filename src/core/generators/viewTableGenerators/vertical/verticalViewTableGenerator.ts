import { TViewTableGeneratorFunc } from '../viewTableGeneratorTypes';
import EViewTypes from '../../../view-types.consts';
import {
  IVerticalGeneratorParams,
  IVerticalViewTable,
} from './verticalTypes';
import { CellMap } from '../cellTypes';

const MINUTES_IN_DAY = 1440;
const MS_IN_MINUTE = 60000;
const MS_IN_DAY = 24 * 60 * MS_IN_MINUTE;

const verticalViewTableGenerator
: TViewTableGeneratorFunc<EViewTypes.verticalDay> = (
  dependency: unknown,
  params: IVerticalGeneratorParams,
): IVerticalViewTable => {
  const viewTable: IVerticalViewTable = {
    columns: {},
    rowsTime: [],
  };

  const countOfDays = (params.viewInterval.viewEndDateMs
    - params.viewInterval.viewStartDateMs) / MS_IN_DAY;
  const cellCountInColumn = Math.round(MINUTES_IN_DAY / params.cellDurationInMinutes);
  const cellDurationMs = params.cellDurationInMinutes * MS_IN_MINUTE;

  // generate row labels
  let currentRowDateTimeMs = params.viewInterval.viewStartDateMs;
  for (let rowIdx = 0; rowIdx < cellCountInColumn; rowIdx += 1) {
    const rowFakeDate = new Date(currentRowDateTimeMs);
    viewTable.rowsTime.push({
      hours: rowFakeDate.getUTCHours(),
      minutes: rowFakeDate.getUTCMinutes(),
      seconds: rowFakeDate.getUTCSeconds(),
    });
    currentRowDateTimeMs += cellDurationMs;
  }
  // end

  let currentCellDateTimeMs = params.viewInterval.viewStartDateMs;

  for (let dayIdx = 0; dayIdx < countOfDays; dayIdx += 1) {
    const columnStartDateMs = currentCellDateTimeMs;
    const columnEndDateMs = currentCellDateTimeMs + MINUTES_IN_DAY * MS_IN_MINUTE;
    const cellMap: CellMap = {};

    for (let cellIdx = 0; cellIdx < cellCountInColumn; cellIdx += 1) {
      const startDateMs = currentCellDateTimeMs;
      const endDateMs = currentCellDateTimeMs + cellDurationMs;

      cellMap[currentCellDateTimeMs] = { startDateMs, endDateMs };

      currentCellDateTimeMs += cellDurationMs;
    }

    viewTable.columns[columnStartDateMs] = {
      startDateMs: columnStartDateMs,
      endDateMs: columnEndDateMs,
      cellMap,
    };
  }

  return viewTable;
};

export default verticalViewTableGenerator;
