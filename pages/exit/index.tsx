import AlertModal from '@components/exit';
import { useState } from 'react';

// FIXME: 동작을 보여주기 위해 임의로 만든 페이지입니다. 기능 구현 후 삭제하겠습니다!
function ExitPage() {
  const [isAlert, setIsAlert] = useState(false);

  return (
    <>
      <button onClick={() => setIsAlert(!isAlert)}>나가기</button>
      <AlertModal isAlert={isAlert} setIsAlert={setIsAlert}></AlertModal>
    </>
  );
}

export default ExitPage;
