import EViewTypes from '../../view-types.consts';
import {
  TVerticalAppointmentViewModelMap,
} from './vertical/verticalAppointmentViewModelTypes';
import TGeneratorFunc from '../common/generatorFuncType';
import { TViewTableGeneratorResult } from '../viewTableGenerators/viewTableGeneratorTypes';
import { IAppointmentPrepared } from '../appointmentPreparedGenerators/appointmentPreparedTypes';

type TDependencies = {
  [EViewTypes.verticalDay]: unknown,
  [EViewTypes.verticalWeek]: unknown,
  [EViewTypes.verticalWorkWeek]: unknown,
  [EViewTypes.verticalMonth]: unknown,
  [EViewTypes.timelineDay]: unknown,
  [EViewTypes.timelineWeek]: unknown,
  [EViewTypes.timelineWorkWeek]: unknown,
  [EViewTypes.timelineMonth]: unknown,
  [EViewTypes.agenda]: unknown,
};

type TParams<TViewType extends EViewTypes> = {
  appointmentsPrepared: IAppointmentPrepared[],
  viewTable: TViewTableGeneratorResult[TViewType],
};

type TResult = {
  [EViewTypes.verticalDay]: TVerticalAppointmentViewModelMap,
  [EViewTypes.verticalWeek]: TVerticalAppointmentViewModelMap,
  [EViewTypes.verticalWorkWeek]: TVerticalAppointmentViewModelMap,
  [EViewTypes.verticalMonth]: unknown,
  [EViewTypes.timelineDay]: unknown,
  [EViewTypes.timelineWeek]: unknown,
  [EViewTypes.timelineWorkWeek]: unknown,
  [EViewTypes.timelineMonth]: unknown,
  [EViewTypes.agenda]: unknown,
};

type TAppointmentViewModelGenerator<TViewType extends EViewTypes> =
    TGeneratorFunc<TDependencies[TViewType], TParams<TViewType>, TResult[TViewType]>;

export type {
  TAppointmentViewModelGenerator,
  TDependencies as TAppointmentViewModelDependencies,
  TParams as TAppointmentViewModelParams,
  TResult as TAppointmentViewModelResult,
};
