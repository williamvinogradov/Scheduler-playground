import EViewTypes from '../view-types.consts';
import {
  TViewTableGeneratorDependencies,
  TViewTableGeneratorFunc, TViewTableGeneratorParams, TViewTableGeneratorResult,
} from '../generators/viewTableGenerators/viewTableGeneratorTypes';
import {
  IAppointmentPreparedDependencies, IAppointmentPreparedGeneratorParams,
  TAppointmentPreparedGenerator,
} from '../generators/appointmentPreparedGenerators/appointmentPreparedTypes';
import {
  TAppointmentViewModelDependencies,
  TAppointmentViewModelGenerator, TAppointmentViewModelResult,
} from '../generators/appointmentViewModelGenerators/appointmentViewModelGeneratorTypes';

interface IWorkspaceResult<TViewTable, TAppointments> {
  viewTable: TViewTable,
  appointments: TAppointments,
}

abstract class Workspace<TViewType extends EViewTypes> {
  protected abstract dependencies: {
    appointmentPrepared: IAppointmentPreparedDependencies,
    viewTable: TViewTableGeneratorDependencies[TViewType],
    appointmentViewModel: TAppointmentViewModelDependencies[TViewType],
  };

  protected constructor(
    protected appointmentPreparedGenerator: TAppointmentPreparedGenerator,
    protected viewTableGenerator: TViewTableGeneratorFunc<TViewType>,
    protected appointmentViewModelGenerator: TAppointmentViewModelGenerator<TViewType>,
  ) {
  }

  generateViewModels(
    prepareAppointmentParams: IAppointmentPreparedGeneratorParams,
    viewTableParams: TViewTableGeneratorParams[TViewType],
  ): IWorkspaceResult<
    TViewTableGeneratorResult[TViewType],
    TAppointmentViewModelResult[TViewType]
    > {
    const appointmentsPrepared = this.appointmentPreparedGenerator(
      this.dependencies.appointmentPrepared,
      prepareAppointmentParams,
    );
    const viewTable = this.viewTableGenerator(
      this.dependencies.viewTable,
      viewTableParams,
    );
    const appointmentViewModels = this.appointmentViewModelGenerator(
      this.dependencies.appointmentViewModel,
      {
        appointmentsPrepared,
        viewTable,
      },
    );

    return {
      viewTable,
      appointments: appointmentViewModels,
    };
  }
}

export default Workspace;
