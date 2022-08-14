import styled from 'styled-components';

import InputComponent from '../Common/InputComponent';

const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + 'px' : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + 'px' : 0)};
`;

const Font = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const FindId = () => {
  return (
    <Div>
      <Font>ID를 잊으셨나요?</Font>
      <Font>아래의 정보를 입력해주세요.</Font>
      <Div mt={30}>
        <InputComponent inputLabel="성" inputWidth="515px" inputHeight="50px"></InputComponent>
      </Div>
    </Div>
  );
};

export default FindId;
