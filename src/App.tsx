import React from 'react';
import './App.css';
import SchedulerComponent from './components/public/scheduler';
import VerticalDayWorkspace from './components/public/vertical/verticalDayWorkspace';

function App() {
  const appointments = [{
    startDate: new Date(Date.UTC(2022, 6, 5, 10, 45)),
    endDate: new Date(Date.UTC(2022, 6, 5, 14, 45)),
    text: 'My appointment 1',
  },
  {
    startDate: new Date(Date.UTC(2022, 6, 6, 14, 45)),
    endDate: new Date(Date.UTC(2022, 6, 6, 16, 25)),
    text: 'My appointment 2',
  }];

  return (
    <SchedulerComponent
      appointments={appointments}
      cellDurationInMinutes={60}
    >
      <VerticalDayWorkspace />
    </SchedulerComponent>
  );
}

export default App;
