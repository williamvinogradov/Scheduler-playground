import { IAppointmentModel, IViewInterval } from '../../../core/model';

interface IWorkspaceInternalProps {
  appointmentModels: IAppointmentModel[],
  viewInterval: IViewInterval,
  cellDurationInMinutes: number,
}

export default IWorkspaceInternalProps;
