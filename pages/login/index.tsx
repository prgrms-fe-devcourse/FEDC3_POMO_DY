import LogoSvg from '@public/images/logo.svg';
import styled from '@emotion/styled';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { LoginApi } from '@components/login/loginApi';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    LoginApi({
      email,
      password,
      onSuccess: () => router.push('/'),
    });
  };
  return (
    <Main>
      <Side>
        <Logo>
          <LogoSvg />
          <LogoTitle>뽀모</LogoTitle>
        </Logo>
        <LogoSubTitle>같이 뽀모해요</LogoSubTitle>
      </Side>
      <Form onSubmit={handleSubmit}>
        <FormTitle>로그인</FormTitle>
        <FormItem>
          <FormSubTitle>이메일</FormSubTitle>
          <FormInput type="email" placeholder="이메일을 입력해주세요" onChange={onEmailHandler} />
        </FormItem>
        <FormItem>
          <FormSubTitle>비밀번호</FormSubTitle>
          <FormInput type="password" placeholder="비밀번호를 입력해 주세요" onChange={onPasswordHandler} />
        </FormItem>
        <FormButton type="submit">로그인</FormButton>
        <FormLink href="/sign">회원가입</FormLink>
      </Form>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Side = styled.div`
  margin-left: 100px;
  margin-top: 150px;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  gap: 50px;
`;

const LogoTitle = styled.h3`
  font-family: 'UhBee EUN KYUNG';
  font-size: 80px;
  font-weight: 700;
`;

const LogoSubTitle = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-size: 48px;
  font-weight: 400;
`;

const Form = styled.form`
  margin-left: 50px;
  margin-top: 50px;
  width: 570px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px 45px 55px 55px;
  gap: 35px;
`;

const FormTitle = styled.h3`
  line-height: 0.5;
  font-size: 30px;
  font-weight: 700;
`;

const FormSubTitle = styled.label`
  font-weight: 700;
  font-size: 20px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormInput = styled.input`
  width: 460px;
  height: 60px;
  border: 2px solid #b3b3b3;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 36px;
  padding-left: 20px;
  color: #838383;
`;

const FormButton = styled.button`
  width: 480px;
  height: 80px;
  margin-top: 20px;
  background-color: #d44645;
  border-radius: 20px;
  border-color: white;
  font-family: 'UhBee EUN KYUNG';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  color: white;
`;

const FormLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
`;
