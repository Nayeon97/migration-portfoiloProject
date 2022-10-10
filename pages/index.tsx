import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import type { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';
import { getProtfoiloList } from '../api/portfolioApi';
import Card from '../components/common/Card';

interface UserInfo {
  _id: string;
  id: string;
  name: string;
  email: string;
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

const Home: NextPage = () => {
  const { data } = useQuery(['portfolioList'], getProtfoiloList);

  return (
    <HomeContainer>
      {data?.map((user, index) => (
        <Card key={index}>
          <div>
            <NameWrapper>🦁 {user.name}</NameWrapper>
            <EmailWrapper>{user.email}</EmailWrapper>
          </div>
        </Card>
      ))}
    </HomeContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['portfoiloList'], getProtfoiloList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  margin-top: 20px;

  div {
    margin-top: 20px;
    cursor: pointer;
  }
`;

const NameWrapper = styled.p`
  color: #4dabf7;
  font-size: 20px;
  font-weight: bold;
`;

const EmailWrapper = styled.p`
  color: #495057;
`;
