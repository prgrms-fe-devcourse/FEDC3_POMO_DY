import LogoSvg from '@public/svg/logo.svg';
import styled from '@emotion/styled';

const FormList = styled.div``;

const Main = styled.div`
  width: 80%;
  height: 60%;
  position: absolute;
  left: 10%;
  top: 10%;
  display: flex;
`;

const LogoSide = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Form = styled.form`
  width: 600px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 40px;
`;

const Title = styled.h3`
  font-family: 'UhBee EUN KYUNG';
  font-size: 80px;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-size: 48px;
  font-weight: 400;
`;

const FormTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

const FormSubTitle = styled.label`
  font-weight: 700;
  font-size: 20px;
`;

const FormInput = styled.input``;

const FormButton = styled.button``;

export default function Create() {
  return (
    <Main>
      <LogoSide>
        <Logo>
          <LogoSvg />
          <Title>뽀모</Title>
        </Logo>
        <SubTitle>같이 뽀모해요</SubTitle>
      </LogoSide>
      <Form>
        <FormTitle>회원가입</FormTitle>
        <FormList>
          <FormSubTitle>이메일</FormSubTitle>
          <FormInput type="email" placeholder="이메일을 입력해주세요" />
        </FormList>
        <FormList>
          <FormSubTitle>비밀번호</FormSubTitle>
          <FormInput type="password" placeholder="비밀번호를 입력해 주세요" />
          <FormSubTitle>비밀번호 재입력</FormSubTitle>
          <FormInput type="password" placeholder="비밀번호를 다시 입력해 주세요" />
        </FormList>
        <FormList>
          <FormSubTitle>이름</FormSubTitle>
          <FormInput type="text" placeholder="이름을 입력해 주세요" />
        </FormList>
        <FormList>
          <FormButton type="submit">회원가입</FormButton>
        </FormList>
      </Form>
    </Main>
  );
}
