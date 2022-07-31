import React, { useState } from "react";
import { Div, CustomDiv } from "../../styles/web.style";
import { Label, StyledDiv, NewDiv, Section } from "./MenuTabBar.style"
import EquipmentCardList from './EquipmentCardList';

const MenuTabBar = () => {
  const [check, setCheck] = useState("option1");

  const onSelectHandler = ({ target: { value } }) => {
    setCheck(value);
  };

  const checkHandler = (val) => {
    return val === check;
  };
  //여기서 정보를 받아옴.
  const equipmentData = [
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
    {
      equipmentId: 3,
      equipmentName: "프레스 머신",
      equipmentEnglishName: "press machine",
      equipmentImage: "",
      equipmentStimulate: "이두근",
      equipmentEnglishStimulate: "biceps, obliques, traps",
      equipmentCategory: "상체",
    },
  ];

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
      <Section>
        <Div className="content content1" overflow="scroll">
          <EquipmentCardList equipmentData={equipmentData}></EquipmentCardList>
        </Div>
        <Div className="content content2" overflow="scroll">
          <EquipmentCardList equipmentData={equipmentData}></EquipmentCardList>
        </Div>
        <Div className="content content3" overflow="scroll">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            error, ipsum excepturi quod quae distinctio ratione accusantium
            fugiat commodi. Aliquam, doloremque sunt optio consequatur nostrum
            veritatis laborum voluptates aliquid suscipit?
          </div>
        </Div>
        <Div className="content content4" overflow="scroll">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            error, ipsum excepturi quod quae distinctio ratione accusantium
            fugiat commodi. Aliquam, doloremque sunt optio consequatur nostrum
            veritatis laborum voluptates aliquid suscipit?
          </div>
        </Div>
      </Section>
    </NewDiv>
  );
};

export default MenuTabBar;
