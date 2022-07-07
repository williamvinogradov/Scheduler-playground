import ITime from '../core/model/time';

const getDateUtcString = (date: Date) => {
  const dayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return `${dayOfWeeks[date.getUTCDay()]} ${date.getUTCDate()}`;
};

const getTimeLabel = (time: ITime) => {
  const { hours, minutes } = time;

  if (hours > 12) {
    return `${(hours % 24).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} PM`;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} AM`;
};

export {
  getDateUtcString,
  getTimeLabel,
};
