import React, { useState } from 'react';
import { validateEmail } from '../../utils/validation';
import styled from 'styled-components';
import { Axios } from '../../api/customApi';
import { AccountTypes } from '../../types';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import SnackBar from '../atoms/SnackBar';

const Register = () => {
  const [account, setAccount] = useState<AccountTypes>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const isNameValid = account.name.length >= 2;
  const isEmailValid = validateEmail(account.email);
  const isPasswordValid = account.password.length >= 4;
  const isPasswordSame = account.password == account.confirmPassword;

  const isButtonActive = isEmailValid && isPasswordValid && isPasswordSame;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    try {
      await Axios.post('user/register', {
        email: account.email,
        password: account.password,
        name: account.name,
      });
    } catch (err) {
      SnackBar(err.error, 'error');
    }
  };

  return (
    <LoginContainer>
      <div>이름</div>
      <Input name="name" value={account.name} onChange={onChange} type="name" />
      {!isNameValid && <p>⚠️ 이름은 2글자 이상으로 설정해 주세요.</p>}
      <div>이메일</div>
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
      {!isPasswordValid && <p>⚠️ 비밀번호는 4글자 이상으로 설정해주세요.</p>}
      <div>비밀번호 확인</div>
      <Input
        name="confirmPassword"
        value={account.confirmPassword}
        onChange={onChange}
        type="password"
      />
      {!isPasswordSame && <p>⚠️ 비밀번호가 일치하지 않습니다.</p>}
      <div>
        <Button
          name="회원 가입"
          disabled={!isButtonActive}
          btnType="add"
          onClick={onClickSubmit}
        />
      </div>
    </LoginContainer>
  );
};

export default Register;

const LoginContainer = styled.div`
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
