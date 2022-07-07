import React from 'react';
import {
  TEmptyTableHeaderCell,
  TTableHeaderCell,
} from '../../../public/vertical/view/tableHeaderCell/tableHeaderCell';
import { TTableCellComponent } from '../../../public/vertical/view/tableCell/tableCell';
import TableColumnContainer from '../../containers/tableColumn/tableColumnContainer';
import {
  TTableRowHeaderCell,
} from '../../../public/vertical/view/tableRowHeaderCell/tableRowHeaderCell';
import VerticalDayWorkspace from '../../../../core/workspaces/verticalDayWorkspace';
import TableRowHeaderColumnContainer from '../../containers/tableRowHeaderColumn/tableRowHeaderColumnContainer';
import AppointmentContainer from '../../containers/appointment/appointmentContainer';
import IWorkspaceInternalProps from '../workspaceInternalProps';

import './verticalDayWorkspace.css';

const workspace = new VerticalDayWorkspace();

interface IPublicProps {
  components: {
    cell: TTableCellComponent,
    headerCell: TTableHeaderCell,
    emptyHeaderCell: TEmptyTableHeaderCell,
    rowHeaderCell: TTableRowHeaderCell,
  },
}

interface IProps {
  public: IPublicProps,
  internal: IWorkspaceInternalProps,
}

function VerticalDayWorkspaceContainer(props: IProps) {
  const {
    public: { components },
    internal: { appointmentModels, viewInterval, cellDurationInMinutes },
  } = props;
  const { viewTable, appointments } = workspace.generateViewModels(
    {
      appointmentModels,
      viewInterval,
    },
    {
      viewInterval,
      cellDurationInMinutes,
    },
  );

  return (
    <div className="workspace-vertical-day">
      <TableRowHeaderColumnContainer>
        {components.emptyHeaderCell()}
        {viewTable.rowsTime.map((rowTime) => components.rowHeaderCell({
          key: `${rowTime.hours}-${rowTime.minutes}`,
          rowTime,
        }))}
      </TableRowHeaderColumnContainer>
      {Object.values(viewTable.columns).map((column) => (
        <TableColumnContainer key={column.startDateMs}>
          {components.headerCell({
            key: column.startDateMs.toString(),
            range: {
              columnStartUtcDate: new Date(column.startDateMs),
              columnEndUtcDate: new Date(column.endDateMs),
            },
          })}
          <>
            {appointments[column.startDateMs]?.map(
              (appointment) => (
                <AppointmentContainer
                  key={appointment.viewData.label}
                  viewModel={appointment}
                />
              ),
            )}
            {Object.values(column.cellMap).map((cell) => components.cell({
              key: cell.startDateMs.toString(),
              range: {
                startDateUtc: new Date(cell.startDateMs),
                endDateUtc: new Date(cell.endDateMs),
              },
            }))}
          </>
        </TableColumnContainer>
      ))}
    </div>
  );
}

export default VerticalDayWorkspaceContainer;
