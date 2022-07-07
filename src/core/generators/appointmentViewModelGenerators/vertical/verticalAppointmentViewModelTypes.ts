import { IAppointmentViewData } from '../../../model';

type TVerticalAppointmentViewModelMap = Record<number, IVerticalAppointmentViewModel[]>;

type TAppointmentHolistic = 'yes' | 'first' | 'last' | 'middle';

interface IVerticalAppointmentPosition {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface IVerticalAppointmentViewModel {
  viewData: IAppointmentViewData;
  holistic: TAppointmentHolistic;
  percentPosition: IVerticalAppointmentPosition;
}

export type {
  TVerticalAppointmentViewModelMap,
  IVerticalAppointmentViewModel,
};
