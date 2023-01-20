import usePomoTimer from '../hooks/usePomoTimer';

interface TimerProps {
  startTime: Date;
  iteration: number;
  startFocus: () => void;
  startRest: () => void;
  finish: () => void;
  increaseCount: () => void;
}

export default function Timer({ startTime, iteration, startFocus, startRest, finish, increaseCount }: TimerProps) {
  const { minute, second } = usePomoTimer(startTime, iteration, startFocus, startRest, finish, increaseCount);
  return (
    <>
      {minute?.toString().padStart(2, '0')} : {second?.toString().padStart(2, '0')}
    </>
  );
}
