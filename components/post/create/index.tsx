import styled from '@emotion/styled';

import Input from './Input';
import { COLORS } from 'styles/colors';
import { onSuccessProp } from './types';

function PostCreate({ onCreate }: onSuccessProp) {
  return (
    <Container>
      <H1>뽀모 모집하기</H1>
      <StyledForm onSubmit={onCreate}>
        <div>
          <InlineLabel htmlFor="title">제목</InlineLabel>
          <Input id="title" placeholder="제목을 입력해주세요" width={400} height={30} />
        </div>
        <div>
          <InlineLabel htmlFor="date">일자</InlineLabel>
          <Input type="date" id="date" placeholder="ex. 2023-01-23" height={30} />
        </div>
        <TimeIntervalWrapper>
          <TimeWrapper>
            <InlineLabel htmlFor="start">시간</InlineLabel>
            <Input type="time" id="start" placeholder="ex. 10:00" height={30} />
            <EndTime id="end"> ~ 11:00</EndTime>
          </TimeWrapper>
          <div>
            <InlineLabel htmlFor="interval">반복 횟수</InlineLabel>
            <Input type="number" id="interval" placeholder="ex. 3" width={50} height={30} />
          </div>
        </TimeIntervalWrapper>
        <ContentWrapper>
          <BlockLabel htmlFor="content">설명</BlockLabel>
          <Content id="content" placeholder="모집할 뽀모에 대한 설명을 작성해주세요" />
        </ContentWrapper>
        <CreateButton type="submit">모집하기</CreateButton>
      </StyledForm>
    </Container>
  );
}

const Container = styled.main({
  width: '700px',
  minWidth: '550px',
});

const H1 = styled.h1({
  fontFamily: 'UhBee EUN KYUNG',
  fontWeight: '700',
});

const StyledForm = styled.form({
  maxWidth: '100%',
  minHeight: '450px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '30px 50px',
  backgroundColor: 'white',
  boxShadow: '2px 3px 9px 3px rgba(83, 83, 83, 0.25)',
  borderRadius: '10px',
  overflowY: 'scroll',
  input: {
    border: '1px solid #B3B3B3',
    borderRadius: '7px',
  },
});

const TimeIntervalWrapper = styled.div({
  display: 'flex',
  gap: '50px',
});

const TimeWrapper = styled.span({
  display: 'inline-block',
});

const Label = styled.label({
  fontSize: '1.3rem',
  fontWeight: '600',
  marginRight: '20px',
});

const BlockLabel = styled(Label)({
  display: 'block',
});

const InlineLabel = styled(Label)({
  display: 'inline-block',
});

const EndTime = styled.span({
  fontSize: '1.1rem',
  fontWeight: '600',
});

const ContentWrapper = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Content = styled.textarea({
  height: '100px',
  padding: '20px',
  margin: '10px 0px 20px 0px',
  outline: 'none',
  resize: 'none',
  border: '1px solid #B3B3B3',
  borderRadius: '10px',
});

const CreateButton = styled.button({
  width: '150px',
  height: '40px',
  backgroundColor: COLORS.main,
  color: 'white',
  border: 'none',
  padding: '5px 30px',
  borderRadius: '28px',
  alignSelf: 'flex-end',
  cursor: 'pointer',
});

export default PostCreate;
