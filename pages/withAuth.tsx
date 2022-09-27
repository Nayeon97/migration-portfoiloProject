import { NextPage } from 'next';
import { useRouter } from 'next/router';

const withAuth = (Component: NextPage | JSX.Element) => {
  const Auth = () => {
    const Router = useRouter();
    if (typeof window !== 'undefined') {
      const accessToken = sessionStorage.getItem('accessToken');

      if (!accessToken) {
        Router.replace('/');
        return null;
      }
      return Component;
    }
  };

  return Auth;
};

export default withAuth;
