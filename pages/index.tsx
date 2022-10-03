import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';
import { Axios } from '../api/customApi';
import Card from '../components/common/Card';

interface UserInfo {
  _id: string;
  id: string;
  name: string;
  password: string;
  description: string;
  visited: number;
  loginMethod: string;
  createdAt: string;
  updateAt: string;
  __v: number;
}
interface UsersInfo {
  users: UserInfo[];
}

const Home: NextPage = ({ users }: UsersInfo) => {
  return (
    <HomeContainer>
      {users?.map((user, index) => (
        <Card key={index}>
          <p>{user.id}</p>
        </Card>
      ))}
    </HomeContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await Axios.get('/userlist');
  const users = await res.data;
  return {
    props: {
      users,
    },
  };
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  margin-top: 20px;
`;
