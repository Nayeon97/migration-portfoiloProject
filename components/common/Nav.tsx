import Link from 'next/link';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrapper>
      <Link href={'/register'}>
        <a>회원가입</a>
      </Link>
      <Link href={'/login'}>
        <a>로그인</a>
      </Link>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  background-color: #d0ebff;
  height: 60px;
  text-align: right;
  line-height: 60px;
  a {
    font-size: 22px;
    color: white;
    margin-right: 50px;
  }
`;
