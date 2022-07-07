import { IAppointmentModel } from '../../model';
import {
  IAppointmentPrepared,
  IAppointmentPreparedDependencies,
} from './appointmentPreparedTypes';
import IViewInterval from '../../model/viewInterval';

const getPreparedStartAndEndDatesMs = (
  appointmentStartMs: number,
  appointmentEndMs: number,
  viewStartMs: number,
  viewEndMs: number,
): [number, number] | null => {
  switch (true) {
    case appointmentStartMs < viewStartMs
        && appointmentEndMs >= viewStartMs
        && appointmentEndMs <= viewEndMs:
      return [viewStartMs, appointmentEndMs];
    case appointmentStartMs > viewStartMs
        && appointmentStartMs < viewEndMs
        && appointmentEndMs >= viewStartMs
        && appointmentEndMs <= viewEndMs:
      return [appointmentStartMs, appointmentEndMs];
    case appointmentStartMs > viewStartMs
        && appointmentStartMs < viewEndMs
        && appointmentEndMs > viewEndMs:
      return [appointmentStartMs, viewEndMs];
    default:
      return null;
  }
};

const appointmentPreparedSimpleGenerator = (
  dependency: IAppointmentPreparedDependencies,
  appointment: IAppointmentModel,
  { viewStartDateMs, viewEndDateMs }: IViewInterval,
): IAppointmentPrepared | null => {
  const shiftedAppointmentStartMs = dependency
    .timezoneConverter(appointment.startDate.getTime(), appointment.startDateTimeZone);
  const shiftedAppointmentEndMs = dependency
    .timezoneConverter(appointment.endDate.getTime(), appointment.endDateTimeZone);

  const preparedAppointmentDatesMs = getPreparedStartAndEndDatesMs(
    shiftedAppointmentStartMs,
    shiftedAppointmentEndMs,
    viewStartDateMs,
    viewEndDateMs,
  );

  if (!preparedAppointmentDatesMs) {
    return null;
  }

  const [startDateUtcMs, endDateUtcMs] = preparedAppointmentDatesMs;

  return {
    viewData: {
      label: appointment.text,
      durationLabel: 'duration label here',
    },
    startDateMs: startDateUtcMs,
    endDateMs: endDateUtcMs,
  };
};

export default appointmentPreparedSimpleGenerator;
