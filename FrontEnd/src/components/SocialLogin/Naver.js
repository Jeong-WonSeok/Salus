import styled from 'styled-components';

import naver from '../../assets/images/naver.png';

const Div = styled.div`
  width: 50px;
  height: 50px;
  border: 0.8px solid #edeef4;
  border-radius: 8px;
  margin: 1rem;
`;

const Naver = () => {
  return (
    <Div className="d-flex justify-content-center align-items-center">
      <img src={naver} alt="" />
    </Div>
  );
};

export default Naver;
