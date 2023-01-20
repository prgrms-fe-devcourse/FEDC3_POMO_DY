import { FOCUS_TIME, REST_TIME } from './../constants';
import { useEffect, useMemo, useState } from 'react';
import { getTimeTable } from '../time/utils';
import useInterval from './useInterval';

export default function usePomoTimer(
  startTime: Date,
  iteration: number,
  startFocusTime: () => void,
  startRestTime: () => void,
  finish: () => void,
) {
  const [second, setSecond] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const timeTable = useMemo(() => {
    return getTimeTable(startTime, iteration);
  }, [iteration, startTime]);
  const [currentStartTime, setCurrentStartTime] = useState<Date>(startTime);

  const calculatePassedTime = () => {
    const now = new Date();
    const passedTime = now.getTime() - currentStartTime.getTime();
    setMinute(Math.floor(passedTime / (1000 * 60)));
    setSecond(Math.floor((passedTime / 1000) % 60));
  };

  useInterval(calculatePassedTime, 1000);

  useEffect(() => {
    if (timeTable.length && timeTable[0].nextTime) {
      if (timeTable[0].nextStatus === 'focus' && minute === REST_TIME && second === 0) {
        setCurrentStartTime(timeTable[0].nextTime);
        startFocusTime();
        timeTable.shift();
      } else if (timeTable[0].nextStatus === 'rest' && minute === FOCUS_TIME && second === 0) {
        setCurrentStartTime(timeTable[0].nextTime);
        startRestTime();
        timeTable.shift();
      } else if (timeTable[0].nextStatus === 'finished' && minute === REST_TIME && second === 0) {
        finish();
        timeTable.shift();
      }
    }
  }, [minute, second, startFocusTime, startRestTime, timeTable, finish]);

  return { second, minute };
}
