import { useEffect } from "react";
import styled from "styled-components";
import google from "../../assets/images/google.png";
import axios from "axios";
import { useState } from "react";

const Div = styled.div`
  width: 50px;
  height: 50px;
  border: 0.8px solid #edeef4;
  border-radius: 8px;
  margin: 1rem;
  cursor: pointer;
`;

const Google = () => {
  const [data, setData] = useState({});
  const googleLoginReq = () => {
    window.open("http://localhost:3010/auth/google");
  };

  return (
    <Div
      className="d-flex justify-content-center align-items-center"
      onClick={googleLoginReq}
    >
      <img src={google} alt="" />
    </Div>
  );
};

export default Google;
