import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
//인터렉티브 인풋 컴포넌트
const StyledDiv = styled.div`
  width: ${(props) => (props.inputWidth ? props.inputWidth : 0 + "px")};
  height: ${(props) => (props.inputHeight ? props.inputHeight : 0 + "px")};
  position: relative;

  & input {
    position: absolute;
    border: 2px solid ${(props) => (props.inputValid ? "#dcddde" : "red")};
    width: 100%;
    height: 100%;
    border-radius: 9px;
    outline: none;
    padding: 1rem;
    transition: 0.2s;
    background: none;
    z-index: 1;
  }

  & label {
    position: absolute;
    top: ${(props) => props.labelTop + "rem"};
    left: 2rem;
    width: 100%;
    height: 100%;
    color: #96989d;
    transition: 0.4s;
    display: ${(props) => (props.inputLength ? "none" : "")};
  }

  & div {
    position: absolute;
    top: -1.5rem;
    left: 0.5rem;
    font-weight: 500;
    color: #1a73e8;
    font-size: 0.8rem;
    display: ${(props) => (props.inputLength ? "" : "none")};
  }

  & input:focus {
    border: 2px solid ${(props) => (props.inputValid ? "#1A73E8" : "red")};
  }

  & input:focus + label {
    top: -1.5rem;
    left: 0.5rem;
    font-weight: 500;
    color: #1a73e8;
    font-size: 0.8rem;
    z-index: 10;
  }
`;

const InputComponent = ({inputLabel, inputWidth="300px", inputHeight="50px", inputValid=true, labelTop= 2}) => {
  const [inputLength, setInputLength] = useState(0)
  const inputLengthChecker = (e) => {
    setInputLength(e.target.value)
  }

  return (
    <StyledDiv
      inputWidth={inputWidth}
      inputHeight={inputHeight}
      inputValid={inputValid}
      labelTop={labelTop}
      inputLength={inputLength ? true : false}
    >
      <div>{inputLabel}</div>
      <input type="text" id="label" autoComplete="off" onChange={inputLengthChecker}/>
      <label htmlFor="label">{inputLabel}</label>
    </StyledDiv>
  );
};

export default InputComponent;