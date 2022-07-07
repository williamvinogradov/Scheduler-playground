import React from 'react';
import { IVerticalAppointmentViewModel } from '../../../../core/generators/appointmentViewModelGenerators/vertical/verticalAppointmentViewModelTypes';

import './appointmentContainer.css';

interface IAppointmentContainerProps {
  viewModel: IVerticalAppointmentViewModel;
}

function AppointmentContainer(props: IAppointmentContainerProps) {
  const { viewModel } = props;
  const inlineStyles = {
    top: `${viewModel.percentPosition.top}%`,
    bottom: `${viewModel.percentPosition.bottom}%`,
  };
  return (
    <div
      style={inlineStyles}
      className="appointment-container"
    >
      {viewModel.viewData.label}
    </div>
  );
}

export default AppointmentContainer;
