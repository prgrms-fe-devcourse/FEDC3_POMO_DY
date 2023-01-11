import Logo from '@public/svg/logo.svg';
import styled from '@emotion/styled';

const Li = styled.li({
  listStyle: 'none',
});

export default function Create() {
  return (
    <>
      <div>
        <Logo />
        <div>뽀모</div>
        <div>같이 뽀모해요</div>
      </div>
      <form>
        <h3>회원가입</h3>
        <ul>
          <Li>
            <label>이메일</label>
            <input type="email" placeholder="이메일을 입력해주세요" />
          </Li>
          <Li>
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력해 주세요" />
            <label>비밀번호 재입력</label>
            <input type="password" placeholder="비밀번호를 다시 입력해 주세요" />
          </Li>
          <Li>
            <label>이름</label>
            <input type="text" placeholder="이름을 입력해 주세요" />
          </Li>
          <Li>
            <button type="submit">회원가입</button>
          </Li>
        </ul>
      </form>
    </>
  );
}
