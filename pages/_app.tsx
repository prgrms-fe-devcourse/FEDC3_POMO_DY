import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { global } from '../styles/global';
import '../public/fonts/index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Head>
          <title>뽀모 - 같이 뽀모해요!</title>
        </Head>
        <Global styles={global} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
