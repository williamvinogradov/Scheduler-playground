import React from 'react';
import { getDateUtcString } from '../../../../../utils/date-time.helpers';

import './tableHeaderCell.css';

interface ITableHeaderCellProps {
  key: string;
  range: {
    columnStartUtcDate: Date;
    columnEndUtcDate: Date;
  }
}

type TTableHeaderCell = (props: ITableHeaderCellProps) => JSX.Element;
type TEmptyTableHeaderCell = () => JSX.Element;

function TableHeaderCell({ key, range }: ITableHeaderCellProps) {
  return <div key={key} className="table-header-cell">{getDateUtcString(range.columnStartUtcDate)}</div>;
}

function EmptyTableHeaderCell() { return <div className="table-header-cell" />; }

export type { ITableHeaderCellProps, TTableHeaderCell, TEmptyTableHeaderCell };
export { TableHeaderCell, EmptyTableHeaderCell };
