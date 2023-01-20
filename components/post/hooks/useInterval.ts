import { useEffect, useRef } from 'react';

type IntervalId = ReturnType<typeof setInterval>;

export default function useInterval(callback: () => void, interval: number) {
  const intervalId = useRef<IntervalId | null>(null);

  const cancel = (id: IntervalId) => {
    clearInterval(id);
  };

  useEffect(() => {
    intervalId.current = setInterval(callback, interval);
    return () => {
      if (intervalId.current !== null) {
        cancel(intervalId.current);
      }
    };
  }, [callback, interval]);

  return {
    cancel,
  };
}
