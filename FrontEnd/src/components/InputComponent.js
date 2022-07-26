import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
//인터렉티브 인풋 컴포넌트
const StyledDiv = styled.div`
  width: ${(props) => (props.inputWidth ? props.inputWidth : 0 + 'px')};
  height: ${(props) => (props.inputHeight ? props.inputHeight : 0 + 'px')};
  color: #443846;
  position: relative;

  & input {
    position: absolute;
    border: 2px solid ${(props) => (props.inputValid ? '#dcddde' : 'red')};
    width: 100%;
    height: 100%;
    border-radius: 9px;
    outline: none;
    padding: 1rem;
    transition: 0.2s;
    background: none;
    z-index: 1;
    font-size: 16px;
    font-weight: 700;
  }

  & label {
    position: absolute;
    top: ${(props) => props.labelTop + 'rem'};
    left: 2rem;
    width: 100%;
    height: 100%;
    color: #96989d;
    transition: 0.3s;
    display: ${(props) => (props.inputLength ? 'none' : '')};
  }

  & div {
    position: absolute;
    top: -1.5rem;
    left: 0.5rem;
    font-weight: 500;
    color: #1a73e8;
    font-size: 0.8rem;
    display: ${(props) => (props.inputLength ? '' : 'none')};
  }

  & input:focus {
    border: 2px solid ${(props) => (props.inputValid ? '#1A73E8' : 'red')};
  }

  & input:focus + label {
    top: -1.5rem;
    left: 0.5rem;
    font-weight: 500;
    color: #1a73e8;
    font-size: 0.8rem;
    z-index: 10;
    font-weight: 400;
  }

  & input[type='date']::-webkit-datetime-edit-text {
    -webkit-appearance: ${(props) => (props.inputLength ? '' : 'none')};
    display: ${(props) => (props.inputLength ? '' : 'none')};
  }

  & input[type='date']::-webkit-datetime-edit-month-field {
    -webkit-appearance: ${(props) => (props.inputLength ? '' : 'none')};
    display: ${(props) => (props.inputLength ? '' : 'none')};
  }

  & input[type='date']::-webkit-datetime-edit-day-field {
    -webkit-appearance: ${(props) => (props.inputLength ? '' : 'none')};
    display: ${(props) => (props.inputLength ? '' : 'none')};
  }

  & input[type='date']::-webkit-datetime-edit-year-field {
    -webkit-appearance: ${(props) => (props.inputLength ? '' : 'none')};
    display: ${(props) => (props.inputLength ? '' : 'none')};
  }

  input[type='date']:valid {
    font-size: 16px;
    font-weight: 400;
  }
`;

const InputComponent = ({inputName, inputEvent, inputId, inputLabel="inputLabel을 지정해주세요.", inputWidth="300px", inputHeight="50px", inputValid=true, labelTop= 2, inputType='text'}) => {
  const [inputLength, setInputLength] = useState(0)
  const inputLengthChecker = (e) => {
    setInputLength(e.target.value)
    inputEvent(e, inputType)
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
      <input
        type={inputType}
        id={`${inputId}`}
        autoComplete="off"
        onChange={inputLengthChecker}
        name = {inputName}
      />
      <label htmlFor={`${inputId}`}>{inputLabel}</label>
    </StyledDiv>
  );
};

export default InputComponent;