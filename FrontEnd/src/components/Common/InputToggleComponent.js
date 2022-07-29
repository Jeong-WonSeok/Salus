import React from "react";
import styled from "styled-components";
import { useState } from "react";
import maleicon from "../../assets/images/maleicon.jpg";
import femaleicon from "../../assets/images/femaleicon.png";
const Label = styled.label`
  position: relative;
  width: 10vw;
  height: 5vh;
  border-radius: 9px;
  font-size: 20px;
  font-weight: 700;
  color: black;

  & span {
    position: absolute;
    left: -0.3vw;
    top: -0.8vh;
    width: 2.6vw;
    height: 4vh;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    appearance: none;
  }

  & input:checked ~ span {
    left: 2.6vw;
  }
`;

const Div = styled.div`
  padding: 8.5px;
  border: 2px solid #dcddde;
  border-radius: 10px;
  width: 6vw;
  height: 5vh;
`;

const ToggleImg = styled.img`
  width: ${(props) => (props.imgWidth ? props.imgWidth : "5vw")};
  height: ${(props) => (props.imgHeight ? props.imgHeight : "5vh")};
`;

const InputToggleComponent = ({
  inputWidth = "100px",
  inputHeight = "200px",
  firstValue = "남자",
  secondValue = "여자",
  inputValid = true,
}) => {
  const [checked, setChecked] = useState(false);
  const checkedHandler = () => {
    setChecked((state) => !state);
  };

  return (
    <Div>
      <Label
        inputWidth={inputWidth}
        inputHeight={inputHeight}
        inputValid={inputValid}
      >
        <input type="checkbox" onClick={checkedHandler} />
        <span>
          {!checked && (
            <div>
              {firstValue === "남자" && (
                <ToggleImg
                  src={maleicon}
                  imgWidth="2vw"
                  imgHeight="3vh"
                  alt=""
                ></ToggleImg>
              )}
            </div>
          )}
          {checked && (
            <div>
              {secondValue === "여자" && (
                <ToggleImg
                  src={femaleicon}
                  imgWidth="2vw"
                  imgHeight="3vh"
                  alt=""
                ></ToggleImg>
              )}
            </div>
          )}
        </span>
        {/* <span>{checked && <div>{secondValue}</div>}</span> */}
      </Label>
    </Div>
  );
};

export default InputToggleComponent;
