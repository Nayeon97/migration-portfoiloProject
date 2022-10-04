import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { GlobalStyle } from '../styles/global-style';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Nav from '../components/common/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { dehydratedState } = pageProps as { dehydratedState: unknown };

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
        <ToastContainer
          style={{ fontSize: '15px', marginTop: '30px', width: 'auto' }}
          position="top-center"
          autoClose={1200}
          closeOnClick={true}
        />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
