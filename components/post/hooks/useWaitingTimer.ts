import { useEffect, useState } from 'react';
import useInterval from './useInterval';

export default function useCountDown(targetTime: Date, finish: () => void) {
  const [second, setSecond] = useState<number>();
  const [minute, setMinute] = useState<number>();

  const calculateRemainingTime = () => {
    const now = new Date();
    const remainingTime = targetTime.getTime() - now.getTime();
    setMinute(Math.floor(remainingTime / (1000 * 60)));
    setSecond(Math.floor((remainingTime / 1000) % 60));
  };

  useInterval(calculateRemainingTime, 1000);
  useEffect(() => {
    if (second === 0 && minute === 0) {
      finish();
    }
  }, [finish, second, minute]);

  return { second, minute };
}
