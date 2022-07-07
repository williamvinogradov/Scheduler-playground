import { IVerticalColumn, TVerticalColumnMap } from '../../viewTableGenerators/vertical/verticalTypes';
import { IVerticalAppointmentViewModel } from './verticalAppointmentViewModelTypes';
import { TAppointmentViewModelGenerator, TAppointmentViewModelParams } from '../appointmentViewModelGeneratorTypes';
import EViewTypes from '../../../view-types.consts';
import { IAppointmentPrepared } from '../../appointmentPreparedGenerators/appointmentPreparedTypes';

const findAppointmentColumns = (
  columns: TVerticalColumnMap,
  { startDateMs }: IAppointmentPrepared,
): IVerticalColumn[] => {
  const startDate = new Date(startDateMs);
  // const endDate = new Date(endDateMs);

  const columnStartDateUtcMs = Date.UTC(
    startDate.getUTCFullYear(),
    startDate.getUTCMonth(),
    startDate.getUTCDate(),
    0,
    0,
    0,
  );
  // const columnEndDateUtcMs = Date.UTC(
  //   endDate.getUTCFullYear(),
  //   endDate.getUTCMonth(),
  //   endDate.getUTCDate(),
  //   0,
  //   0,
  //   0,
  // );

  const startColumn = columns[columnStartDateUtcMs];
  // const endColumn = columns[columnEndDateUtcMs];

  return [startColumn];
};

const generateVerticalAppointmentViewModel = (
  appointment: IAppointmentPrepared,
  columns: TVerticalColumnMap,
): [IVerticalAppointmentViewModel, number][] => {
  const [column] = findAppointmentColumns(columns, appointment);
  return [[
    {
      viewData: appointment.viewData,
      percentPosition: {
        // TODO: Move this calc to separate func.
        top: +((appointment.startDateMs - column.startDateMs)
          / (column.endDateMs - column.startDateMs)).toFixed(2) * 100,
        right: 0,
        left: 0,
        // TODO: Move this calc to separate func.
        bottom: 100 - (+((appointment.endDateMs - column.startDateMs)
          / (column.endDateMs - column.startDateMs)).toFixed(2) * 100),
      },
      holistic: 'yes',
    },
    column.startDateMs,
  ]];
};

const verticalAppointmentViewModelGenerator
: TAppointmentViewModelGenerator<EViewTypes.verticalDay> = (
  dependency: unknown,
  { appointmentsPrepared, viewTable }: TAppointmentViewModelParams<EViewTypes.verticalDay>,
) => {
  const appointmentMap: Record<number, IVerticalAppointmentViewModel[]> = {};

  appointmentsPrepared.forEach((appointment) => {
    const viewModels = generateVerticalAppointmentViewModel(appointment, viewTable.columns);
    viewModels.forEach(([viewModel, columnIdx]) => {
      if (!appointmentMap[columnIdx]) {
        appointmentMap[columnIdx] = [viewModel];
        return;
      }

      appointmentMap[columnIdx].push(viewModel);
    });
  });

  return appointmentMap;
};

export default verticalAppointmentViewModelGenerator;
