import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        style={{ fontSize: '15px', marginTop: '30px', width: 'auto' }}
        position="top-center"
        autoClose={1200}
        closeOnClick={true}
      />
    </>
  );
}

export default MyApp;
