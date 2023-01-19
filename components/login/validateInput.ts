export const validNickNameCheck = (nickName: string) => {
  const specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if (nickName == null || nickName == '') {
    alert('닉네임 입력은 필수입니다.');
    return false;
  }

  if (nickName.search(/\s/) != -1) {
    alert('닉네임은 빈 칸을 포함 할 수 없습니다.');
    return false;
  }

  if (nickName.length < 2 || nickName.length > 9) {
    alert('닉네임은 2자 이상 8자 미만입니다.');
    return false;
  }

  if (specialCheck.test(nickName)) {
    alert('닉네임은 특수문자를 포함 할 수 없습니다.');
    return false;
  }
  return true;
};

export const validPasswordCheck = (password: string) => {
  const regExpPassword = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
  if (!regExpPassword.test(password)) {
    alert('비밀번호는 영어, 숫자 및 1개이상의 특수문자가 포함된 6글자 이상 입니다.');
    return false;
  }
  return true;
};
