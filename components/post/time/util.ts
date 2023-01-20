import { FOCUS_TIME, REST_TIME } from '../constants';
import { NextTime } from '../types';

export const getTimeTable = (startTime: Date, iteration: number) => {
  const timeTable: NextTime[] = [];
  for (let i = 0; i < iteration; i++) {
    const timeToRest = new Date(startTime);
    timeToRest.setMinutes(timeToRest.getMinutes() + FOCUS_TIME + 60 * i);
    const timeToFocus = new Date(timeToRest);
    timeToRest.setMinutes(timeToFocus.getMinutes() + REST_TIME);

    timeTable.push({ nextStatus: 'rest', nextTime: timeToRest });
    if (i < iteration - 1) {
      timeTable.push({ nextStatus: 'focus', nextTime: timeToFocus });
    } else {
      timeTable.push({ nextStatus: 'finished', nextTime: null });
    }
  }
  return timeTable;
};
