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

export const validPasswordCheck = (passWord: string) => {
  const regExpPassword = new RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$');
  if (!regExpPassword.test(passWord)) {
    alert('비밀번호는 영어 , 숫자로 구성된 8글자 이상 입니다.');
    return false;
  }
  return true;
};
