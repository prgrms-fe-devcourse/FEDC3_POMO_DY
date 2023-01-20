import styled from '@emotion/styled';
import Image from 'next/image';
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
    <Container>
      <Image src="/images/clock.svg" alt="시계" width="382" height="397" />
      <TimeText>
        {minute} : {second}
      </TimeText>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const TimeText = styled.div`
  position: absolute;
  top: 168px;
  left: 123px;
  font-weight: 700;
  font-size: 50px;
  line-height: 84px;
  color: #2b2b2b;
  font-family: 'UhBee EUN KYUNG';
`;
