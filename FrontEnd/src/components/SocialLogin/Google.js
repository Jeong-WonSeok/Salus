import styled from 'styled-components';

import google from '../../assets/images/google.png';

const Div = styled.div`
  width: 50px;
  height: 50px;
  border: 0.8px solid #edeef4;
  border-radius: 8px;
  margin: 1rem;
`;

const Google = () => {
  return (
    <Div className="d-flex justify-content-center align-items-center">
      <img src={google} alt="" />
    </Div>
  );
};

export default Google;
