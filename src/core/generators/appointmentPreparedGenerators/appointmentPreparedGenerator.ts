import { IAppointmentModel } from '../../model';
import {
  IAppointmentPrepared,
  IAppointmentPreparedDependencies,
  IAppointmentPreparedGeneratorParams, TAppointmentPreparedGenerator,
} from './appointmentPreparedTypes';
import appointmentPreparedSimpleGenerator from './appointmentPreparedSimpleGenerator';
import IViewInterval from '../../model/viewInterval';

const prepareAppointment = (
  dependency: IAppointmentPreparedDependencies,
  appointment: IAppointmentModel,
  viewInterval: IViewInterval,
): IAppointmentPrepared | null => {
  if (appointment.recurrenceRule) {
    throw Error('not implemented yet.');
  }

  return appointmentPreparedSimpleGenerator(dependency, appointment, viewInterval);
};

const appointmentPreparedGenerator: TAppointmentPreparedGenerator = (
  dependency: IAppointmentPreparedDependencies,
  params: IAppointmentPreparedGeneratorParams,
): IAppointmentPrepared[] => {
  const { appointmentModels, viewInterval } = params;
  return appointmentModels
    .map((appointmentModel) => prepareAppointment(dependency, appointmentModel, viewInterval))
    .filter((appointment) => !!appointment) as IAppointmentPrepared[];
};

export default appointmentPreparedGenerator;
