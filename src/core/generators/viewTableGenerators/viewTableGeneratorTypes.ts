import EViewTypes from '../../view-types.consts';
import {
  IVerticalGeneratorParams,
  IVerticalViewTable,
} from './vertical/verticalTypes';
import TGeneratorFunc from '../common/generatorFuncType';

type TDependencies = {
  [EViewTypes.verticalDay]: undefined,
  [EViewTypes.verticalWeek]: unknown,
  [EViewTypes.verticalWorkWeek]: unknown,
  [EViewTypes.verticalMonth]: unknown,
  [EViewTypes.timelineDay]: unknown,
  [EViewTypes.timelineWeek]: unknown,
  [EViewTypes.timelineWorkWeek]: unknown,
  [EViewTypes.timelineMonth]: unknown,
  [EViewTypes.agenda]: unknown,
};

type TParams = {
  [EViewTypes.verticalDay]: IVerticalGeneratorParams,
  [EViewTypes.verticalWeek]: unknown,
  [EViewTypes.verticalWorkWeek]: unknown,
  [EViewTypes.verticalMonth]: unknown,
  [EViewTypes.timelineDay]: unknown,
  [EViewTypes.timelineWeek]: unknown,
  [EViewTypes.timelineWorkWeek]: unknown,
  [EViewTypes.timelineMonth]: unknown,
  [EViewTypes.agenda]: unknown,
};

type TResult = {
  [EViewTypes.verticalDay]: IVerticalViewTable,
  [EViewTypes.verticalWeek]: unknown,
  [EViewTypes.verticalWorkWeek]: unknown,
  [EViewTypes.verticalMonth]: unknown,
  [EViewTypes.timelineDay]: unknown,
  [EViewTypes.timelineWeek]: unknown,
  [EViewTypes.timelineWorkWeek]: unknown,
  [EViewTypes.timelineMonth]: unknown,
  [EViewTypes.agenda]: unknown,
};

type TViewTableGeneratorFunc<TViewType extends EViewTypes> =
    TGeneratorFunc<TDependencies[TViewType], TParams[TViewType], TResult[TViewType]>;

export type {
  TViewTableGeneratorFunc,
  TDependencies as TViewTableGeneratorDependencies,
  TParams as TViewTableGeneratorParams,
  TResult as TViewTableGeneratorResult,
};
