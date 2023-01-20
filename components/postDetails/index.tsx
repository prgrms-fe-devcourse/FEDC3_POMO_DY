import { MouseEventHandler, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Modal from '@components/common/modal';
import UserList from './UserList';
import { UserInfo } from './types';
import { COLORS } from 'styles/colors';
import { internalApi, publicApi } from 'api';
import { fetchUsers } from './fetchUsers';

interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

interface PostInfo {
  _id: string;
  channelId: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  iteration: string;
  likes: Array<Like>;
}

interface Props {
  postInfo: PostInfo;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function PostDetails({ postInfo, isOpen, setIsOpen }: Props) {
  const router = useRouter();
  const [entered, setEntered] = useState(false);
  const [users, setUsers] = useState<UserInfo[]>([]);
  const {
    _id: postId,
    channelId,
    title,
    description: content,
    date,
    startTime,
    endTime,
    iteration: interval,
    likes: participants,
  } = postInfo;

  const getUsersInfo = useCallback(async () => {
    const userInfo = await fetchUsers(participants);
    return userInfo;
  }, [participants]);

  const checkEntered = useCallback((enteredUsers: Array<UserInfo>) => {
    const myId = localStorage.getItem('ID');
    if (!myId) {
      setEntered(false);
      alert('다시 로그인 해주세요.');
      router.push('/');
      return;
    }

    if (enteredUsers.findIndex((item) => item.userId === myId) !== -1) {
      setEntered(true);
      return;
    }

    setEntered(false);
  }, []);

  useEffect(() => {
    getUsersInfo().then((res) => {
      setUsers(() => [...res]);
      checkEntered(res);
    });
  }, [postInfo, getUsersInfo, checkEntered]);

  const routePostPage = () => router.push(`/post/${channelId}/${postId}`);

  const handleEnterPost: MouseEventHandler = () => {
    publicApi
      .post('/likes/create', { postId })
      .then((res) => {
        console.log(res);
        routePostPage();
      })
      .catch(() => {
        alert('뽀모에 참가할 수 없어요. 다시 시도해주세요.');
      });
  };

  return (
    <Modal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <Container>
        <PostInfoWrapper>
          {entered && <PointText>참여중</PointText>}
          <PostTitle>{title}</PostTitle>
          <PostContent>{content}</PostContent>
          <FlexWrapper>
            <PostTimeInfo>
              <p>
                <SubTitle>일자</SubTitle>
                <SubDescription>{date}</SubDescription>
              </p>
              <p>
                <SubTitle>시간</SubTitle>
                <SubDescription>
                  <Highlight>{startTime}</Highlight> - {endTime}
                </SubDescription>
              </p>
              <p>
                <SubTitle>반복</SubTitle>
                <SubDescription>
                  <Highlight>{interval}회</Highlight>
                </SubDescription>
              </p>
            </PostTimeInfo>
            <PostParticipants>
              <SubTitle>참여 멤버</SubTitle>
              <UserList users={users} />
            </PostParticipants>
          </FlexWrapper>
        </PostInfoWrapper>
        {entered ? (
          <EnterButton onClick={routePostPage}>뽀모방 가기</EnterButton>
        ) : (
          <EnterButton onClick={handleEnterPost}>뽀모 참여하기</EnterButton>
        )}
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  min-width: 400px;
  max-width: 450px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const PostInfoWrapper = styled.div`
  padding: 0 13% 20px;
`;

const PointText = styled.div`
  width: fit-content;
  padding: 3px 8px;
  background-color: #fffbeb;
  border: 2px solid #fbf2cf;
  border-radius: 28px;
  color: #ff9a61;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const PostContent = styled.p`
  max-height: 200px;
  margin-bottom: 50px;
  font-size: 1.1rem;
  line-height: 1.4;
  overflow: scroll;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const PostTimeInfo = styled.div`
  width: 65%;
  min-height: 150px;
  & > p {
    margin: 0 0 10px 0;
  }
`;

const PostParticipants = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #838383;
  margin-right: 7%;
`;

const SubDescription = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

const EnterButton = styled.button({
  minWidth: '150px',
  minHeight: '43px',
  marginBottom: '30px',
  backgroundColor: COLORS.main,
  fontSize: '1.1rem',
  fontWeight: '500',
  color: 'white',
  border: 'none',
  padding: '5px 30px',
  borderRadius: '28px',
  alignSelf: 'center',
  cursor: 'pointer',
});

const Highlight = styled.span`
  color: ${COLORS.main};
`;

export default PostDetails;
