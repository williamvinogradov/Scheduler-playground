import React from 'react';

import './tableColumnContainer.css';

interface ITableColumnContainer {
  children: [React.ReactNode, React.ReactNode];
}

function TableColumnContainer({ children }: ITableColumnContainer) {
  const [headerChild, payloadChild] = children;
  return (
    <div className="table-column">
      <div className="table-column__header">
        {headerChild}
      </div>
      <div className="table-column__payload">
        {payloadChild}
      </div>
    </div>
  );
}

export default TableColumnContainer;
