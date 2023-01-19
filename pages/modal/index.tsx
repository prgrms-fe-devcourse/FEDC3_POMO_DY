import { useState } from 'react';

import PostDetails from '@components/postDetails';

// FIXME: 뽀모 모집글 상세 모달을 사용하는 템플릿 페이지입니다. 추후 삭제할 예정입니다!
function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dummyPostInfo = {
    _id: '63c5b7adaab6f72d8708ec52',
    channelId: '63c22e612358f16faf4df033',
    title: '같이 모각코해요',
    description:
      '4시간 모여서 각자 코딩해요~ 할일이 너무너무 많은데... 엉엉엉 울고싶다다다당... 같이 화이팅해요오옹....',
    date: '2022.01.19',
    startTime: '10:00',
    endTime: '11:00',
    iteration: '3',
    likes: [{ id: 'likeId', userId: 'userId' }],
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>뽀모 모집글 보기</button>
      <PostDetails postInfo={dummyPostInfo} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}

export default ModalPage;
