import React from 'react';
import styles from './AuthWrapper.module.css'

//로그인, 회원가입 Wrapper 컴포넌트
const AuthWrapper = ({ children, classList=[] }) => {
  return (
    <div className={`${styles.auth} ${classList.join(" ")}`}>{ children }</div>
  );
};

export default AuthWrapper;