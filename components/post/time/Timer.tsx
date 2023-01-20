import usePomoTimer from '../hooks/usePomoTimer';

interface TimerProps {
  startTime: Date;
  iteration: number;
  startFocus: () => void;
  startRest: () => void;
  finish: () => void;
}

export default function Timer({ startTime, iteration, startFocus, startRest, finish }: TimerProps) {
  const { minute, second } = usePomoTimer(startTime, iteration, startFocus, startRest, finish);
  return (
    <>
      {minute} : {second}
    </>
  );
}
