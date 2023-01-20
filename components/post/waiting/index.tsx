import styled from '@emotion/styled';
import Logo from '@public/images/logo.svg';
import useCountDown from '../hooks/useCountDown';

interface WaitingProps {
  targetTime: Date;
  finish: () => void;
}

export default function Waiting({ targetTime, finish }: WaitingProps) {
  const { minute, second } = useCountDown(targetTime, finish);
  return (
    <Container>
      <Logo />
      <WaitingText>뽀모 대기 중</WaitingText>
      <WaitingTimer>
        <span>
          {minute}분 {second}초
        </span>{' '}
        뒤에 시작할 예정이에요.
      </WaitingTimer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(43, 43, 43, 0.9);
  width: 100vw;
  height: 100vh;
  // FIXME: 원래는 필요 없는데 다른 곳의 z-index 때문에 해줌. 두 곳 같이 뺄 수 있어보임.
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const WaitingText = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-weight: 700;
  font-size: 54px;
  line-height: 91px;
  margin-top: 24px;
`;

const WaitingTimer = styled.div`
  margin-top: 15px;
  & > span {
    color: #fbf2cf;
  }
`;
