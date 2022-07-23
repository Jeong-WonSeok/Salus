import React from 'react';
import styled from 'styled-components'
//인터렉티브 인풋 컴포넌트

const InputComponent = ({inputLabel, inputWidth=300, inputHeight=50, inputValid=true, labelTop= 2}) => {
  const StyledDiv = styled.div`
    width: ${(props) => props.inputWidth + "px"};
    height: ${(props) => props.inputHeight + "px"};
    position: relative;

    & input {
      position: absolute;
      border: 2px solid ${(props) => (props.inputValid ? "#dcddde" : "red")};
      width: 100%;
      height: 100%;
      border-radius: 5px;
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
    }

    & input:focus {
      border: 2px solid ${(props) => (props.inputValid ? "#9DCEFF" : "red")};
    }

    & input:focus + label {
      top: -0.5rem;
      left: 2rem;
      font-weight: 500;
      color: black;
      z-index: 10;
    }
  `;

  return (
    <StyledDiv inputWidth={inputWidth} inputHeight={inputHeight} inputValid={inputValid} labelTop={labelTop}>
      <input type="text" id="label"/>
      <label htmlFor="label">{ inputLabel }</label>
    </StyledDiv>
  );
};

export default InputComponent;