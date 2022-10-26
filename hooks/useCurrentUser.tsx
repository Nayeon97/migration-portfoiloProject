import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../api/portfolioApi';
import SnackBar from '../components/common/SnackBar';

export const useCurrentUser = () => {
  const { data } = useQuery(['currentUser'], async () => await getUserInfo(), {
    staleTime: Infinity,
    retry: false,
    onError: (error) => {
      SnackBar('사용자 정보가 없습니다.', 'error');
    },
  });

  return { userState: data };
};
