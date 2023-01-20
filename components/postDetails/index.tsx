import { MouseEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Modal from '@components/common/modal';
import UserList from './UserList';
import { UserInfo } from './types';
import { COLORS } from 'styles/colors';
import { publicApi } from 'api';
import { fetchUsers } from './fetchUsers';

interface PostInfo {
  _id: string;
  channelId: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  iteration: string;
  likes: Array<{ id: string; userId: string }>;
}

interface Props {
  postInfo: PostInfo;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function PostDetails({ postInfo, isOpen, setIsOpen }: Props) {
  const router = useRouter();
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
  const dummyUserData = [
    { id: '63c806ddd10a060b921e3efa', userId: '63c2b8272358f16faf4df0c5' },
    { id: '63c806ddd10a060b921e3efa', userId: '63c2b8272358f16faf4df0c5' },
    { id: '63c806ddd10a060b921e3efa', userId: '63c2b8272358f16faf4df0c5' },
    { id: '63c806ddd10a060b921e3efa', userId: '63c2b8272358f16faf4df0c5' },
  ];
  const [users, setUsers] = useState<UserInfo[]>([]);

  const getUsersInfo = async () => {
    const userInfo = await fetchUsers(dummyUserData);
    // const userInfo = await fetchUsers(participants);
    setUsers([...userInfo]);
  };

  useEffect(() => {
    getUsersInfo();
  }, []);

  const handleEnterPost: MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);

    publicApi
      .post('/likes/create', { postId })
      .then((res) => {
        console.log(res);
        router.push(`/post/${channelId}/${postId}`);
      })
      .catch(() => alert('뽀모에 참가할 수 없어요 ㅠ.ㅠ'));
  };

  return (
    <Modal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <Container>
        <PostInfoWrapper>
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
        <EnterButton onClick={handleEnterPost}>뽀모 참여하기</EnterButton>
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
