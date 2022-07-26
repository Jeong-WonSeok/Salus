import styled from 'styled-components';

import logo from '../assets/images/logo.png';
import slogan from '../assets/images/slogan.png';

const Logo = styled.div`
  width: 462px;
  height: 100%;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);

  & img {
    width: 346px;
  }
`;

const SignupLogo = () => {
  return (
    <Logo className="d-flex flex-column align-items-center justify-content-center">
      <img src={logo} alt="로고 이미지" />
      <img src={slogan} alt="로고 이미지" />
    </Logo>
  );
};

export default SignupLogo;
