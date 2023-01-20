import styled from '@emotion/styled';
import Image from 'next/image';
import { COLORS } from 'styles/colors';
import { TIME_STATUS_NAME } from '../constants';
import { TimeStatus } from '../types';

interface TimeProps {
  status: TimeStatus;
}

export default function Time({ status }: TimeProps) {
  return (
    <Container>
      <Timer>
        <Clock src="/images/clock.svg" alt="시계" width="382" height="397" />
        <TimeText>11 : 00</TimeText>
      </Timer>
      <Status status={status}>
        <Image src={`/images/pomo-circle${status === 'focus' ? '-white' : ''}.svg`} alt="로고" width="60" height="60" />
        <StatusText>{TIME_STATUS_NAME[status]}</StatusText>
      </Status>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;
`;

const Clock = styled(Image)``;

const Status = styled.div<{ status: TimeStatus }>`
  background-color: ${({ status }) => (status === 'rest' ? '#ffffff' : COLORS.main)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 90px;
  padding: ${({ status }) => (status === 'rest' ? '5px 39px 5px 7px' : '5px 7px 5px 39px')};
  display: inline-flex;
  gap: 21px;
  align-items: center;
  flex-direction: ${({ status }) => (status === 'rest' ? 'row' : 'row-reverse')};
  color: ${({ status }) => (status === 'rest' ? '#2B2B2B' : '#ffffff')};
`;

const Timer = styled.div`
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

const StatusText = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
`;
