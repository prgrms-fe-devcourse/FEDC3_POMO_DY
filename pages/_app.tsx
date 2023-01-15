import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { global } from '../styles/global';
import '../public/fonts/index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Header } from '@components/common/Header';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, refetchOnReconnect: false, retry: 1 } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Head>
          <title>뽀모 - 같이 뽀모해요!</title>
        </Head>
        <Global styles={global} />
        <Header />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
