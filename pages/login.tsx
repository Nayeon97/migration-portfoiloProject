import { NextPage } from 'next';
import Login from '../components/login/Login';
import withAuth from './withAuth';

const login: NextPage = () => {
  return <Login />;
};
export default login;
