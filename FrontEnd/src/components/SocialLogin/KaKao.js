import styled from 'styled-components';

import kakao from '../../assets/images/sociallogin/kakao.png';

const Div = styled.div`
  width: 50px;
  height: 50px;
  border: 0.8px solid #edeef4;
  border-radius: 8px;
  margin: 1rem;
`;

const Kakao = () => {
  return (
    <Div className="d-flex justify-content-center align-items-center kakao-bg">
      <img src={kakao} alt="" />
    </Div>
  );
};

export default Kakao;
