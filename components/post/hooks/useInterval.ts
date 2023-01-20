import { useEffect, useRef } from 'react';

type IntervalId = ReturnType<typeof setInterval>;

export default function useInterval(callback: () => void, interval: number, isAutoStart = true) {
  const intervalId = useRef<IntervalId | null>(null);

  const cancel = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
  };

  const start = () => {
    if (isAutoStart) return;
    intervalId.current = setInterval(() => {
      callback();
    }, interval);
  };

  useEffect(() => {
    if (isAutoStart) {
      intervalId.current = setInterval(callback, interval);
    }
    return () => {
      if (intervalId.current !== null) {
        cancel();
      }
    };
  }, [callback, interval, isAutoStart]);

  return {
    cancel,
    start,
  };
}
