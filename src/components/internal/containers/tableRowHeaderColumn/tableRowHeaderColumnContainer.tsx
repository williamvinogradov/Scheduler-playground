import React from 'react';

import './tableRowHeaderColumnContainer.css';

interface ITableRowHeaderColumnContainerProps {
  children: React.ReactNode;
}

function TableRowHeaderColumnContainer({ children }: ITableRowHeaderColumnContainerProps) {
  return <div className="table-row-header-column">{children}</div>;
}

export default TableRowHeaderColumnContainer;
