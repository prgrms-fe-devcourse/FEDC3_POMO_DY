import { Header } from '@components/common/Header';
import { ReactNode, useMemo } from 'react';
import { useRouter } from 'next/router';

export default function BaseLayout(props: { children: ReactNode }) {
  const router = useRouter();

  const isNotAccessable = useMemo(
    () => router.pathname.startsWith('/login') || router.pathname.startsWith('/sign') || router.route === '/404',
    [router.pathname],
  );

  return (
    <>
      {!isNotAccessable && <Header />}
      {props.children}
    </>
  );
}
