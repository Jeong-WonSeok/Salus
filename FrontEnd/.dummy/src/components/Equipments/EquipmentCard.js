import React from "react";
import styled from "styled-components";
import { CustomDiv, Div } from "../../../../src/styles/web.style";
import { RoundButton } from "../../../../src/components/Common/RoundButton";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const EquipmentCard = () => {
  return (
    <CustomDiv
      mt="20px"
      ml="50px"
      mr="50px"
      mb="60px"
      divWidth="13%"
      borderRadius="10px"
    >
      <CustomDiv
        divWidth="139px"
        divHeight="190px"
        borderRadius="10px"
        className="white-bg"
        shadowDiv="1px 1px 4px grey, 0.1em 0.1em skyblue"
      >
        <CustomDiv
          className="wrap-over"
          positionDiv="absolute"
          divWidth="139px"
          divHeight="190px"
          borderRadius="10px"
        >
          <CustomDiv
            justifyContent="center"
            alignItems="center"
            divHeight="100%"
            borderRadius="10px"
          >
            <RoundButton
              buttonWidth="100px"
              buttonHeight="25px"
              borderRadius="30px"
            >
              상세 정보
            </RoundButton>
          </CustomDiv>
        </CustomDiv>
        <Img
          src="https://img.freepik.com/free-vector/pilates-concept-illustration_114360-1111.jpg"
          alt=""
        />
        <Div displayDiv="flex" justifyContent="center">
          <Div mt="10px">체스트 프레스</Div>
        </Div>
      </CustomDiv>
    </CustomDiv>
  );
};

export default EquipmentCard;
