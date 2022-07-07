import React from 'react';
import WorkspaceContext from '../../context/workspaceContext';
import VerticalDayWorkspaceContainer from '../../internal/workspaces/verticalDay/verticalDayWorkspace';
import { TableCell, TTableCellComponent } from './view/tableCell/tableCell';
import {
  EmptyTableHeaderCell,
  TableHeaderCell,
  TEmptyTableHeaderCell,
  TTableHeaderCell,
} from './view/tableHeaderCell/tableHeaderCell';
import { TableRowHeaderCell, TTableRowHeaderCell } from './view/tableRowHeaderCell/tableRowHeaderCell';

interface VerticalDayWorkspaceProps {
  components?: {
    cell?: TTableCellComponent,
    headerCell?: TTableHeaderCell,
    emptyHeaderCell?: TEmptyTableHeaderCell,
    rowHeaderCell?: TTableRowHeaderCell,
  }
}

function VerticalDayWorkspace({ components }: VerticalDayWorkspaceProps) {
  return (
    <WorkspaceContext.Consumer>
      { (value) => (
        <VerticalDayWorkspaceContainer
          internal={{
            appointmentModels: value!.appointmentModels,
            viewInterval: value!.viewInterval,
            cellDurationInMinutes: value!.cellDurationInMinutes,
          }}
          public={{
            components: {
              cell: components?.cell || TableCell,
              headerCell: components?.headerCell || TableHeaderCell,
              emptyHeaderCell: components?.emptyHeaderCell || EmptyTableHeaderCell,
              rowHeaderCell: components?.rowHeaderCell || TableRowHeaderCell,
            },
          }}
        />
      )}
    </WorkspaceContext.Consumer>
  );
}

VerticalDayWorkspace.defaultProps = {
  components: {},
};

export default VerticalDayWorkspace;
