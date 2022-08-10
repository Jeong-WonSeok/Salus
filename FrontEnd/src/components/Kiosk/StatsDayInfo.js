import React from "react";
import {
  LogoDiv,
  DailyLogoDiv,
  Div,
  CustomDiv,
} from "../../styles/kiosk.style";

const StatsDayInfo = ({
  volume = "-",
  reps = "-",
  time = "-",
  calorie = "-",
}) => {
  return (
    <CustomDiv
      mt={20}
      bgMain="white"
      ml={40}
      mr={20}
      borderRadius={8}
      divHeight={185}
      divWidth={1008}
    >
      <Div
        fontWeight={600}
        fontSize="1.7rem"
        textAlign="center"
        mb={30}
        pt={15}
      >
        오늘의 기록
      </Div>
      <Div
        displayDiv="flex"
        justifyContent="space-between"
        ml={80}
        mr={80}
        mt={20}
      >
        <Div>
          <DailyLogoDiv
            fontSize="1.5rem"
            fontWeight={700}
            flexDirection="column"
          >
            VOLUME
          </DailyLogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
            ml={15}
            mt={8}
          >
            {volume}
            <Div>kg</Div>
          </Div>
        </Div>
        <Div>
          <DailyLogoDiv
            fontSize="1.5rem"
            fontWeight={700}
            flexDirection="column"
          >
            REPS
          </DailyLogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
            ml={5}
            mt={8}
          >
            {reps}
            <Div>회</Div>
          </Div>
        </Div>
        <Div>
          <DailyLogoDiv
            fontSize="1.5rem"
            fontWeight={700}
            flexDirection="column"
          >
            TIME
          </DailyLogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
            ml={10}
            mt={8}
          >
            {time}
            <Div>minute</Div>
          </Div>
        </Div>
        <Div>
          <DailyLogoDiv
            fontSize="1.5rem"
            fontWeight={700}
            flexDirection="column"
          >
            CALORIE
          </DailyLogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
            mt={8}
            ml={15}
          >
            {calorie}
            <Div>cal</Div>
          </Div>
        </Div>
      </Div>
    </CustomDiv>
  );
};

export default StatsDayInfo;
