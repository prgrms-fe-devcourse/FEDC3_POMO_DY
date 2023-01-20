import { ReactNode } from 'react';
import styled from '@emotion/styled';

import CloseIcon from 'public/icons/close.svg';
import { useBodyScrollLock } from './useBodyScrollLock';

interface Props {
  children?: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (arg: boolean) => void;
}

function Modal({ isModalOpen, setIsModalOpen, children }: Props) {
  const { openScroll } = useBodyScrollLock();

  const handleClose = () => {
    openScroll();
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ModalWrapper>
          <Dimmed />
          <ModalContainer>
            <CloseButton onClick={handleClose} />
            {children}
          </ModalContainer>
        </ModalWrapper>
      )}
    </>
  );
}

const ModalWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 100px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 5vh 0 13vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Dimmed = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.4;
`;

const ModalContainer = styled.div`
  min-height: 100px;
  max-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 1;
  border-radius: 16px;
`;

const CloseButton = styled(CloseIcon)`
  min-height: 64px;
  align-self: flex-end;
  cursor: pointer;
`;

export default Modal;
