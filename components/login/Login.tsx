import React, { useState } from 'react';
import { Axios } from '../../api/customApi';
import { validateEmail } from '../../utils/validation';
import { AccountTypes } from '../../types';
import Input from '../common/Input';
import Button from '../common/Button';
import SnackBar from '../common/SnackBar';
import styled from 'styled-components';
import Card from '../common/Card';

const Login = () => {
  const [account, setAccount] = useState<AccountTypes>({
    email: '',
    password: '',
  });

  const isEmailValid = validateEmail(account.email);
  const isPasswordValid = account.password.length >= 4;
  const isButtonActive = isEmailValid && isPasswordValid;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    try {
      const res = await Axios.post('user/login', {
        email: account.email,
        password: account.password,
      });
      const user = res.data;
      const accessToken = user.token;
      sessionStorage.setItem('userToken', accessToken);
    } catch (err) {
      SnackBar(err.error, 'error');
    }
  };

  return (
    <RegisterContainer>
      <div>이메일</div>
      <Card />
      <Input
        name="email"
        value={account.email}
        onChange={onChange}
        type="email"
      />
      {!isEmailValid && <p>⚠️ 이메일 형식이 올바르지 않습니다.</p>}
      <div>비밀번호</div>
      <Input
        name="password"
        value={account.password}
        onChange={onChange}
        type="password"
      />
      {!isPasswordValid && <p>⚠️ 비밀번호는 4글자 이상입니다.</p>}
      <div>
        <Button
          name="로그인"
          disabled={!isButtonActive}
          btnType="add"
          onClick={onClickSubmit}
        />
      </div>
    </RegisterContainer>
  );
};

export default Login;

const RegisterContainer = styled.div`
  display: grid;

  div {
    color: #74c0fc;
    margin-top: 20px;
  }
  p {
    font-size: 12px;
    color: #495057;
  }
`;
