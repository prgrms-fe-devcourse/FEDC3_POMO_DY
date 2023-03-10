import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import PencilImg from '@public/icons/pencil.svg';
import ProfileImg from '@public/icons/profile.svg';
import { publicApi } from 'api';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getLocalstorage } from '@components/auth/localstorage';
import { FollowingIdData, UserInfoProps } from './types';
import Modal from '@components/common/modal';
import { useQueryClient } from 'react-query';
import { validNickNameCheck, validPasswordCheck } from '@components/login/validateInput';

export const UserInfo = ({ email, userName, isMyInfo }: UserInfoProps) => {
  const [isFallow, setIsFallow] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: '',
    inputType: '',
    modalType: '',
    placeholder: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState('');
  const router = useRouter();
  const followId = router.query.id;
  const hostId = getLocalstorage('ID');
  const queryClient = useQueryClient();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initState = async () => {
    try {
      const response = await publicApi.get(`/users/${hostId}`);
      const checkFollow = response.data.following.findIndex((item: FollowingIdData) => item.user === followId);
      if (response.status === 200 && checkFollow >= 0) {
        setIsFallow(true);
      }
    } catch (error) {
      console.log(error, '정보 입력 실패');
    }
  };

  useEffect(() => {
    initState();
  }, [initState, userName]);

  const onInputModalHendler = (e: ChangeEvent<HTMLInputElement>) => {
    setModalInputValue(e.target.value);
  };

  const onSubmitModalHendler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modalInfo.modalType === 'name') {
      if (!validNickNameCheck(modalInputValue)) {
        return;
      }
      try {
        const response = await publicApi.put('/settings/update-user', {
          fullName: modalInputValue,
        });
        if (response.status === 200) {
          setIsModalOpen(false);
          if (isMyInfo === true) {
            queryClient.invalidateQueries('myData');
          }
        }
      } catch (error) {
        console.log(error, '이름 변경 실패');
      }
    } else if (modalInfo.modalType === 'password') {
      if (!validPasswordCheck(modalInputValue)) {
        return;
      }
      try {
        const response = await publicApi.put('/settings/update-password', {
          password: modalInputValue,
        });
        if (response.status === 200) {
          setIsModalOpen(false);
        }
      } catch (error) {
        console.log(error, '비밀번호 변경 실패');
      }
    } else {
      console.error('옳지않은 타입입니다.');
      setIsModalOpen(false);
    }
  };

  const onModifyNameHandler = async () => {
    setIsModalOpen(true);
    setModalInfo({ title: '닉네임 변경', inputType: 'text', modalType: 'name', placeholder: '닉네임을 입력해 주세요' });
  };

  const onModifyPasswordHandler = async () => {
    setIsModalOpen(true);
    setModalInfo({
      title: '비밀번호 변경',
      inputType: 'password',
      modalType: 'password',
      placeholder: '비밀번호를 입력해 주세요',
    });
  };

  const onFollowHandler = async () => {
    const followId = router.query.id;
    try {
      const response = await publicApi.post('/follow/create', {
        userId: followId,
      });
      if (response.status === 200) {
        setIsFallow(true);
        queryClient.invalidateQueries([followId]);
      }
    } catch (error) {
      console.log(error, '팔로우 실패');
    }
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Container onSubmit={onSubmitModalHendler}>
          <ModalTitle>{modalInfo.title}</ModalTitle>
          <ModalInput
            onChange={onInputModalHendler}
            type={modalInfo.inputType}
            placeholder={modalInfo.placeholder}
            autoFocus
          />
          <RedButton>완료</RedButton>
        </Container>
      </Modal>
      <InfoContainer>
        <Info>
          <ProfileImg className="infoIcon" />
          <InfoDetail>
            <InfoUserName>{userName}</InfoUserName>
            {isMyInfo && <PencilImg onClick={onModifyNameHandler} />}
            <InfoUserEmail>{email}</InfoUserEmail>
          </InfoDetail>
        </Info>
        {isMyInfo ? (
          <RedButton onClick={onModifyPasswordHandler}>비밀번호 변경</RedButton>
        ) : isFallow ? (
          <GrayButton>팔로잉</GrayButton>
        ) : (
          <RedButton onClick={onFollowHandler}>팔로우</RedButton>
        )}
      </InfoContainer>
    </>
  );
};

const Info = styled.div`
  display: flex;
  gap: 42px;
  margin-top: 92px;
  margin-left: 130px;
  & > .infoIcon {
    display: block;
    width: 160px;
    height: 160px;
  }
`;

const InfoContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

const InfoDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
  gap: 15px;
`;

const InfoUserName = styled.div`
  height: 48px;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
`;

const InfoUserEmail = styled.div`
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  grid-column: span 2;
`;

const Button = styled.button`
  margin-top: 138px;
  width: 162px;
  height: 48px;
  background: ${COLORS.main};
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: white;
  border: none;
  border-radius: 28px;
  border-color: ${COLORS.main};
`;

const RedButton = styled(Button)`
  background: ${COLORS.main};
  border-color: ${COLORS.main};
`;

const GrayButton = styled(Button)`
  background: #838383;
  border-color: #838383;
`;

const Container = styled.form`
  min-width: 450px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 40px;
`;

const ModalTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const ModalInput = styled.input`
  margin-top: 80px;
  padding-left: 2px;
  height: 45px;
  font-size: 1.3rem;
  font-weight: 400;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 5px;
  border-color: ${COLORS.main};

  :focus {
    outline: none;
  }
`;
