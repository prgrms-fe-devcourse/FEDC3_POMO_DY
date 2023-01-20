import { useEffect, useRef } from 'react';

type IntervalId = ReturnType<typeof setInterval>;

export default function useInterval(callback: () => void, interval: number, isAutoStart = true) {
  const intervalId = useRef<IntervalId | null>(null);

  const cancel = (id: IntervalId) => {
    clearInterval(id);
  };

  const start = () => {
    if (isAutoStart) return;
    intervalId.current = setInterval(callback, interval);
  };

  useEffect(() => {
    if (isAutoStart) {
      intervalId.current = setInterval(callback, interval);
    }
    return () => {
      if (intervalId.current !== null) {
        cancel(intervalId.current);
      }
    };
  }, [callback, interval, isAutoStart]);

  return {
    cancel,
    start,
  };
}
