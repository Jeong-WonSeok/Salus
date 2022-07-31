import React from "react";
import styled from "styled-components";
import { CustomDiv, Div } from "./../../styles/web.style";
import { RoundButton } from "./../Common/RoundButton";

const Img = styled.img`
  width: 100%;
  height: 70%;
`;

const NameDiv = styled(Div)`
  text-align: center;
  font-size: 14px;
`;

const EquipmentCard = () => {
  return (
    <CustomDiv ml="50px" mr="50px" mb="70px" divWidth="13%" >
      <CustomDiv
        divWidth="139px"
        divHeight="190px"
        borderRadius="10px"
        className="white-bg"
        shadowDiv="1px 3px 4px grey"
      >
        <Img
          src="https://www.pngall.com/wp-content/uploads/5/Workout-PNG-High-Quality-Image.png"
          alt=""
        />
        <NameDiv mb="8px">운동</NameDiv>
        <Div displayDiv="flex" justifyContent="center">
          <RoundButton
            buttonWidth="100px"
            buttonHeight="25px"
            borderRadius="30px"
          >
            상세 정보
          </RoundButton>
        </Div>
      </CustomDiv>
    </CustomDiv>
  );
};

export default EquipmentCard;
