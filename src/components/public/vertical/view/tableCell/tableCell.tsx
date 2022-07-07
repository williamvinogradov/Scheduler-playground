import React from 'react';

import './tableCell.css';

interface ITableCellProps {
  key: string,
  // This is a public interface, so we need this props here.
  // eslint-disable-next-line react/no-unused-prop-types
  range: {
    startDateUtc: Date;
    endDateUtc: Date;
  }
}

type TTableCellComponent = (props: ITableCellProps) => JSX.Element;

function TableCell({ key }: ITableCellProps) { return <div key={key} className="table-cell" />; }

export type { ITableCellProps, TTableCellComponent };
export { TableCell };
