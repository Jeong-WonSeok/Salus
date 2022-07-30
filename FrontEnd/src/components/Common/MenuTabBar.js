import React, { useState } from "react";
import { Div, CustomDiv } from "./../../styles/web.style";
import styled from "styled-components";
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
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;

const StyledDiv = styled(Div)`
  position: absolute;
  height: 100%;
  width: 25%;
  z-index: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  border-radius: 5px;
  transition: all 0.35s ease;
`;

const NewDiv = styled(Div)`
  #upper:checked ~ div .slider {
    left: 25%;
  }
  #lower:checked ~ div .slider {
    left: 50%;
  }
  #cardio:checked ~ div .slider {
    left: 75%;
  }
  #whole:checked ~ div label.Whole,
  #upper:checked ~ div label.Upper,
  #lower:checked ~ div label.Lower,
  #cardio:checked ~ div label.Cardio {
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .content {
    display: none;
  }

  #whole:checked ~ section .content1 {
    display: block;
  }

  #upper:checked ~ section .content2 {
    display: block;
  }

  #lower:checked ~ section .content3 {
    display: block;
  }

  #cardio:checked ~ section .content4 {
    display: block;
  }
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
    <NewDiv>
      <input
        type="radio"
        name="slider"
        id="whole"
        value="option1"
        checked={checkHandler("option1")}
        onChange={onSelectHandler}
      />
      <input
        type="radio"
        name="slider"
        id="upper"
        value="option2"
        checked={checkHandler("option2")}
        onChange={onSelectHandler}
      />
      <input
        type="radio"
        name="slider"
        id="lower"
        value="option3"
        checked={checkHandler("option3")}
        onChange={onSelectHandler}
      />
      <input
        type="radio"
        name="slider"
        id="cardio"
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
        <Label htmlFor="whole" className="Whole">
          전체
        </Label>
        <Label htmlFor="upper" className="Upper">
          상체
        </Label>
        <Label htmlFor="lower" className="Lower">
          하체
        </Label>
        <Label htmlFor="cardio" className="Cardio">
          유산소
        </Label>
        <StyledDiv className="slider"></StyledDiv>
      </CustomDiv>
      <section>
        <Div className="content content1">
          <div>이거</div>
        </Div>
        <Div className="content content2">
          <div>저거</div>
        </Div>
        <Div className="content content3">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error, ipsum excepturi quod quae distinctio ratione accusantium fugiat commodi. Aliquam, doloremque sunt optio consequatur nostrum veritatis laborum voluptates aliquid suscipit?</div>
        </Div>
        <Div className="content content4">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error, ipsum excepturi quod quae distinctio ratione accusantium fugiat commodi. Aliquam, doloremque sunt optio consequatur nostrum veritatis laborum voluptates aliquid suscipit?</div>
        </Div>
      </section>
    </NewDiv>
  );
};

export default MenuTabBar;
