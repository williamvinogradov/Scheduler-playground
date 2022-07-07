import React from 'react';
import { getTimeLabel } from '../../../../../utils/date-time.helpers';
import ITime from '../../../../../core/model/time';

import './tableRowHeaderCell.css';

interface ITableRowHeaderCell {
  key: string,
  rowTime: ITime;
}

type TTableRowHeaderCell = (props: ITableRowHeaderCell) => JSX.Element;

function TableRowHeaderCell({ key, rowTime }: ITableRowHeaderCell) {
  return (
    <div key={key} className="table-row-header-cell">
      {getTimeLabel(rowTime)}
    </div>
  );
}

export type { ITableRowHeaderCell, TTableRowHeaderCell };
export { TableRowHeaderCell };
