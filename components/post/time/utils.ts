import { FOCUS_TIME, REST_TIME } from '../constants';
import { NextTime } from '../types';

export const getTimeTable = (startTime: Date, iteration: number) => {
  const timeTable: NextTime[] = [];
  for (let i = 0; i < iteration; i++) {
    const timeToRest = new Date(startTime);
    timeToRest.setMinutes(timeToRest.getMinutes() + FOCUS_TIME + 60 * i);
    const timeToFocus = new Date(timeToRest);
    timeToFocus.setMinutes(timeToFocus.getMinutes() + REST_TIME);

    timeTable.push({ nextStatus: 'rest', nextTime: timeToRest });
    timeTable.push({ nextStatus: i < iteration - 1 ? 'focus' : 'finished', nextTime: timeToFocus });
  }
  return timeTable;
};
