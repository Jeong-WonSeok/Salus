import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Label = styled.label`
  position: relative;
  width: 370px;
  height: 55px;
  border-radius: 9px;
  
  font-size: 20px;
  font-weight: 700;
  color: black;

  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 50px;
    background: white;
    border: 1.5px solid white;
    border-radius: 14px;
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
    left: 190px;
  }
`;

const Div = styled.div`
  padding: 8.5px;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  border-radius: 10px;
  width: 364px;
  height: 61px;
`;



const InputToggleComponent = ({inputWidth="100px", inputHeight="200px", firstValue='남자', secondValue='여자', inputValid=true}) => {
  const [checked, setChecked] = useState(false)
  const checkedHandler = () => {
    setChecked((state) => !state)
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
          {!checked && <div>{firstValue}</div>}
          {checked && <div>{secondValue}</div>}
        </span>
        {/* <span>{checked && <div>{secondValue}</div>}</span> */}
      </Label>
    </Div>
  );
};

export default InputToggleComponent;