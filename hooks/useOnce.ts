import { useRef } from 'react';

export const useOnce = (handler: () => void) => {
  const isExecuted = useRef(false);
  if (typeof window !== 'undefined') {
    if (!isExecuted.current) {
      handler();
      isExecuted.current = true;
    }
  }
};
