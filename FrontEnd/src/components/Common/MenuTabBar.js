import React, { useState } from "react";
import { Div, CustomDiv } from "./../../styles/web.style";
import styled from "styled-components";
import style from "./MenuTabBar.module.css"

const Label = styled.label`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  color: black;
  font-size: 1.3rem;
  z-index: 1;
  position: relative;
  border-radius: 5px;
`;


const MenuTabBar = () => {
  const [check, setCheck] = useState("option1");

  const onSelectHandler = ({ target: { value } }) => {
    setCheck(value);
  };

  const checkHandler = (val) => {
    return val === check;
  };

  return (
    <Div>
      <input
        type="radio"
        name="slider"
        id='whole'
        value="option1"
        checked={checkHandler("option1")}
        onChange={onSelectHandler}
      />
      <input
        type="radio"
        name="slider"
        id='upper'
        value="option2"
        checked={checkHandler("option2")}
        onChange={onSelectHandler}
      />
      <input
        type="radio"
        name="slider"
        id='lower'
        value="option3"
        checked={checkHandler("option3")}
        onChange={onSelectHandler}
      />
      <input
        type="radio"
        name="slider"
        id='cardio'
        value="option4"
        checked={checkHandler("option4")}
        onChange={onSelectHandler}
      />
      <CustomDiv
        border-radius="5px"
        divWidth="60%"
        divHeight="50px"
        displayDiv="flex"
        alignItems="center"
        positionDiv="relative"
      >
        <Label htmlFor="whole" className={`${style.Whole}`}>
          전체
        </Label>
        <Label htmlFor="upper" className={`${style.Upper}`}>
          상체
        </Label>
        <Label htmlFor="lower" className={`${style.Lower}`}>
          하체
        </Label>
        <Label htmlFor="cardio" className={`${style.Cardio}`}>
          유산소
        </Label>
        <Div className={`${style.slider}`}></Div>
      </CustomDiv>
    </Div>
  );
};

export default MenuTabBar;
