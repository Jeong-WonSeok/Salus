import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import logo from '../assets/images/biglogo.png';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  }
`;

const Img = styled.img`
  width: 70%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 18vh;
`;

const StyledDiv = styled.div`
  width: 70%;
  height: 80px;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  line-height: 80px;
  border-radius: 99px;
  background: linear-gradient(284.21deg, #2e52ff -7.95%, #8da1ff 138.55%);
  margin-top: 40vh;
`;

const KioskLoginPage = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Div>
        <Img src={logo} alt="logoimg" />
        <StyledDiv>키를 통해 로그인해주세요.</StyledDiv>
      </Div>
    </Fragment>
  );
};

export default KioskLoginPage;
