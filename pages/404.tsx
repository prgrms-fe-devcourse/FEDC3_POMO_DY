import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';

const Page: NextPage = () => {
  const router = useRouter();

  const move = () => {
    router.push('/');
  };

  const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Box = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
    display: block;
    width: 150px;
    height: 50px;
    padding: 5px 10px;
    margin-top: 50px;
    border-radius: 30px;
    background-color: #d44645;
    font-weight: bold;
    color: white;
    box-shadow: 1px 3px 2px 1px rgba(0, 0, 0, 0.2);
  `;

  const TextBox = styled.div`
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    color: black;
  `;

  const Text = styled.p`
    text-align: center;
    word-break: keep-all;
    font-weight: bold;
  `;

  return (
    <Container>
      <Box>
        <Box>
          <Image src="/images/404.svg" alt="404이미지" width={300} height={200}></Image>
          <TextBox>
            <Text>찾을 수 없는 페이지 입니다.</Text>
            <Text>요청하신 페이지가 사라졌거나 잘못된 페이지 입니다.</Text>
          </TextBox>
        </Box>
        <Button onClick={move}>홈으로 돌아가기</Button>
      </Box>
    </Container>
  );
};

export default Page;
