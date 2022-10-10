import { Axios } from './customApi';

export const getProtfoiloList =async () => {
    const res = await Axios.get('/userlist');
    return res.data;
}