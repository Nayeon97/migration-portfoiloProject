import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SnackBar from '../components/common/SnackBar';

const withAuth = (Component: NextPage | React.FC) => {
  const Auth = () => {
    const Router = useRouter();

    useEffect(() => {
      const checkLogin = async () => {
        const accessToken = sessionStorage.getItem('userToken');
        if (!accessToken) {
          Router.replace('/');
          SnackBar('로그인 후 사용해주세요.', 'error');
        }
      };
      checkLogin();
    }, []);

    return <Component />;
  };
  return Auth;
};

export default withAuth;
