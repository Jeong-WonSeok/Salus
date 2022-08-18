import styled from 'styled-components';

import logo from '../../assets/images/logo/logo.png';
import slogan from '../../assets/images/logo/slogan.png';

const Logo = styled.div`
  width: 732px;
  height: 100%;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);

  & img {
    width: 346px;
  }
`;

const LoginLogo = () => {
  return (
    <Logo className="d-flex flex-column align-items-center justify-content-center">
      <img src={logo} alt="로고 이미지" />
      <img src={slogan} alt="로고 이미지" />
    </Logo>
  );
};

export default LoginLogo;
