import type { AppProps } from 'next/app';

import Head from 'next/head';
import '../public/fonts/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>뽀모 - 같이 뽀모해요!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
