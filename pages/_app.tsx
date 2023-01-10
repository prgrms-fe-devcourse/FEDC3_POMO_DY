import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { global } from '../styles/global';
import '../public/fonts/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>뽀모 - 같이 뽀모해요!</title>
      </Head>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}
