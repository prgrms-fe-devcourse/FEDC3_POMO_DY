import { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

import Modal from '@components/common/modal';
import LogoSad from '@public/images/logo-sad.svg';
import { COLORS } from 'styles/colors';

interface Props {
  isAlert: boolean;
  setIsAlert: (value: boolean) => void;
}

function AlertModal({ isAlert, setIsAlert }: Props) {
  const handleCancelAlert: MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAlert(false);
  };

  const handleContinueAlert: MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAlert(false);
    // TODO: 뽀모 나가기 로직 처리
  };

  return (
    <Modal isModalOpen={isAlert} setIsModalOpen={setIsAlert}>
      <Container>
        <Logo />
        <MainDescription>뽀모도로를 종료하시겠습니까?</MainDescription>
        <SubDescription>다시 뽀모에 참여할 수 없어요.</SubDescription>
        <ButtonWrapper>
          <CancelButton onClick={handleCancelAlert}>취소</CancelButton>
          <ContinueButton onClick={handleContinueAlert}>나가기</ContinueButton>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Logo = styled(LogoSad)`
  min-height: 50px;
  margin-bottom: 15px;
`;

const MainDescription = styled.p`
  margin: 0 0 5px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #585858;
`;

const SubDescription = styled.p`
  margin: 0 0 25px;
  font-size: 0.85rem;
  font-weight: 400;
  color: #787878;
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 43px;
  max-height: 43px;
  display: flex;
  height: 50px;
`;

const CancelButton = styled.button`
  width: 50%;
  font-size: 0.85rem;
  color: #787878;
  background-color: #eaeaea;
  border-bottom-left-radius: 13px;
  cursor: pointer;
`;

const ContinueButton = styled.button`
  width: 50%;
  font-size: 0.85rem;
  color: white;
  background-color: ${COLORS.main};
  border-bottom-right-radius: 13px;
  cursor: pointer;
`;

export default AlertModal;
