import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AuthWrapper from '../layout-wrapper/AuthWrapper';
import LoginLogo from '../components/Auth/LoginLogo';
import InputComponent from '../components/Common/InputComponent';
import ButtonComponent from '../components/Common/ButtonComponent';

import Google from '../components/SocialLogin/Google';
import Naver from '../components/SocialLogin/Naver';
import KaKao from '../components/SocialLogin/KaKao';

const FormContainer = styled.form`
  width: 560px;
  height: 100%;
`;

const Font = styled.div`
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + 'px' : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + 'px' : 0)};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
`;

const Hrsect = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #dcddde;
  font-size: 14px;
  margin: 8px 0px;

  ::before,
  ::after {
    width: 100px;
    content: '';
    flex-grow: 1;
    background-color: #dcddde;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const Span = styled.span`
  font-size: 15px;
`;

const LoginPage = () => {
  const [passwordOption, setPasswordOption] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState({
    type: 'password',
    autoComplete: 'current-password',
  });

  useEffect(() => {
    if (passwordOption === false)
      setPasswordInputType({
        type: 'password',
        autoComplete: 'current-password',
      });
    else
      setPasswordInputType({
        type: 'text',
        autoComplete: 'off',
      });
  }, [passwordOption]);

  const classList = ['d-flex'];
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <AuthWrapper classList={classList}>
      <LoginLogo />
      <FormContainer onSubmit={SubmitHandler} className="d-flex flex-column align-items-center">
        <Div mt={130}>
          <Font>로그인</Font>
        </Div>
        <Div mt={30}>
          <InputComponent
            inputLabel="이메일"
            inputHeight="3vh"
            inputWidth="17.5vw"
            inputValid={true}
            labelTop={1.7}
          ></InputComponent>
        </Div>
        <Div mt={50}>
          <InputComponent
            inputLabel="비밀번호"
            inputHeight="3vh"
            inputWidth="17.5vw"
            inputValid={true}
            labelTop={1.7}
            inputType={passwordInputType.type}
          ></InputComponent>
          <Div mt={20}>
            <label htmlFor="cb">
              <input
                type="checkbox"
                id="cb"
                checked={passwordOption}
                onChange={() => setPasswordOption(!passwordOption)}
              />
              <Span>비밀번호 표시</Span>
            </label>
          </Div>
        </Div>
        <Div mt={20} ml={25}>
          <ButtonComponent buttonWidth="360px" buttonHeight="50px" buttonText="로그인" />
          <div className="d-flex justify-content-center mt-3">
            <StyledLink to="/signup" className="grey-100-font">
              회원 가입
            </StyledLink>
            <Span className="grey-100-font mx-1">|</Span>
            <StyledLink to="/findaccount" className="grey-100-font">
              아이디/비밀번호 찾기
            </StyledLink>
          </div>
        </Div>
        <Div mt={20}>
          <Hrsect>소셜로그인</Hrsect>
        </Div>
        <Div className="d-flex">
          <Google />
          <Naver />
          <KaKao />
        </Div>
      </FormContainer>
    </AuthWrapper>
  );
};

export default LoginPage;
