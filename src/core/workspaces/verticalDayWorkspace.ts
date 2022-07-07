import Workspace from './worspace';
import EViewTypes from '../view-types.consts';
import verticalViewTableGenerator from '../generators/viewTableGenerators/vertical/verticalViewTableGenerator';
import verticalAppointmentViewModelGenerator from '../generators/appointmentViewModelGenerators/vertical/verticalAppointmentViewModelGenerator';
import appointmentPreparedGenerator from '../generators/appointmentPreparedGenerators/appointmentPreparedGenerator';
import { timezoneConverter } from '../generators/timezone';

class VerticalDayWorkspace extends Workspace<EViewTypes.verticalDay> {
  protected dependencies = {
    appointmentPrepared: {
      timezoneConverter,
    },
    viewTable: undefined,
    appointmentViewModel: {},
  };

  constructor() {
    super(
      appointmentPreparedGenerator,
      verticalViewTableGenerator,
      verticalAppointmentViewModelGenerator,
    );
  }
}

export default VerticalDayWorkspace;
