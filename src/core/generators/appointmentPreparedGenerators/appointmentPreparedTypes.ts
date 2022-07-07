import { IAppointmentModel, IAppointmentViewData } from '../../model';
import { TTimezoneConverter } from '../timezone';
import IViewInterval from '../../model/viewInterval';

interface IAppointmentPreparedDependencies {
  timezoneConverter: TTimezoneConverter;
}

interface IAppointmentPreparedGeneratorParams {
  appointmentModels: IAppointmentModel[],
  viewInterval: IViewInterval,
}

interface IAppointmentPrepared {
  viewData: IAppointmentViewData;
  startDateMs: number;
  endDateMs: number;
}

type TAppointmentPreparedGenerator = (
  dependency: IAppointmentPreparedDependencies,
  params: IAppointmentPreparedGeneratorParams,
) => IAppointmentPrepared[];

export type {
  IAppointmentPreparedDependencies,
  IAppointmentPreparedGeneratorParams,
  IAppointmentPrepared,
  TAppointmentPreparedGenerator,
};
