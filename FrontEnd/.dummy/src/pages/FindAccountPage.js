import React, { useState } from "react";
import styled from "styled-components";

import FindId from "../../../src/components/Auth/FindId";
import FindPw from "../../../src/components/Auth/FindPw";

const Wrapper = styled.div`
  width: 785px;
  height: 600px;
  background-color: white;
`;

const Font = styled.span`
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: ${(props) => (props.IsFindId ? "100%" : "0px")};
    height: 4px;
    margin: 5px 0 0;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.3s;
    opacity: 0;
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    opacity: ${(props) => (props.IsFindId ? "1" : "0")};
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }
`;

const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + "px" : 0)};
  width: 100%;
`;

const FindAccountPage = () => {
  const [isFindId, setIsFindId] = useState(true);

  const IdHandler = () => {
    setIsFindId(true);
  };

  const PwHandler = () => {
    setIsFindId(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Wrapper>
        <Div mt={30} className="d-inline-flex justify-content-around">
          <Font IsFindId={isFindId} onClick={IdHandler}>
            ID 찾기
          </Font>
          <Font IsFindId={!isFindId} onClick={PwHandler}>
            비밀번호 찾기
          </Font>
        </Div>
        <Div mt={30} ml={70} className="d-flex flex-column">
          {isFindId ? <FindId /> : <FindPw />}
        </Div>
      </Wrapper>
    </div>
  );
};

export default FindAccountPage;
