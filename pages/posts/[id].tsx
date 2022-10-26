import { NextPage } from 'next';
import withAuth from '../withAuth';
import Project from '../../components/portfoilo/project/Project';

const Post: NextPage = () => {
  return (
    <div>
      <div>프로젝트</div>
      <div>
        <Project />
      </div>
    </div>
  );
};

export default withAuth(Post);
