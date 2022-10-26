import { Axios } from './customApi';

export const getUserInfo = async () => {
  const res = await Axios.get('user/current');
  return res.data;
};

export const getProtfoiloList = async () => {
  const res = await Axios.get('/userlist');
  return res.data;
};
