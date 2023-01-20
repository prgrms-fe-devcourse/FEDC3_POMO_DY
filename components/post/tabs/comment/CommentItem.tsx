import styled from '@emotion/styled';
import EmptyProfileImage from 'public/icons/profile.svg';
import { COLORS } from 'styles/colors';
import SadPomo from '@public/images/logo-sad.svg';

interface CommentItemProps {
  comment: string;
  isHidden?: boolean;
}

export default function CommentItem({ comment, isHidden }: CommentItemProps) {
  return isHidden ? (
    <HiddenComment>
      <Circle />
      <HiddenText>
        휴식 시간에 볼 수 있어요
        <SadPomo className="sad-pomo" />
      </HiddenText>
    </HiddenComment>
  ) : (
    <Container>
      <EmptyProfileImage />
      <Comment>{comment}</Comment>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const Comment = styled.div`
  width: calc(100% - 73px);
  background-color: #d9d9d9;
  border-radius: 20px;
  padding: 16px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  display: flex;
  align-items: center;
`;

const HiddenComment = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .sad-pomo {
    width: 27px;
    height: 21px;
  }
`;

const HiddenText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: calc(100% - 73px);
  background-color: ${COLORS.sub_green};
  border-radius: 20px;
  padding: 16px 20px;
  color: white;
  font-family: 'UhBee EUN KYUNG';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 56px;
  height: 56px;
  background-color: #d0e0cb;
`;
