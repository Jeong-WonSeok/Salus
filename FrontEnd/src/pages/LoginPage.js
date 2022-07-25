import React from 'react';

import AuthWrapper from '../layout-wrapper/AuthWrapper';
import LoginLogo from '../components/LoginLogo';

const LoginPage = () => {
  return (
    <AuthWrapper className="d-flex">
      <LoginLogo />
      <p>로그인</p>
    </AuthWrapper>
  );
};

export default LoginPage;
