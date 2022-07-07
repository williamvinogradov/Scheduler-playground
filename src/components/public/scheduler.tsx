import React from 'react';
import { IAppointmentModel } from '../../core/model';
import IWorkspaceInternalProps from '../internal/workspaces/workspaceInternalProps';
import WorkspaceContext from '../context/workspaceContext';

interface ISchedulerProps {
  appointments: IAppointmentModel[];
  children: React.ReactElement<IWorkspaceInternalProps>;
  cellDurationInMinutes?: number,
}

function SchedulerComponent({ appointments, children, cellDurationInMinutes }: ISchedulerProps) {
  const internalProps: IWorkspaceInternalProps = React.useMemo(() => (
    {
      appointmentModels: appointments,
      viewInterval: {
        viewStartDateMs: Date.UTC(2022, 6, 3),
        viewEndDateMs: Date.UTC(2022, 6, 8),
      },
      cellDurationInMinutes: cellDurationInMinutes!,
    }
  ), [appointments, cellDurationInMinutes]);

  return (
    <WorkspaceContext.Provider value={internalProps}>
      <div>{children}</div>
    </WorkspaceContext.Provider>
  );
}

SchedulerComponent.defaultProps = {
  cellDurationInMinutes: 60,
};

export default SchedulerComponent;
