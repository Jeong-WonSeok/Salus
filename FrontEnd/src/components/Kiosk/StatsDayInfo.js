import React from "react";
import { LogoDiv } from "../../styles/kiosk.style";
import { Div } from "../../styles/kiosk.style";

const StatsDayInfo = () => {
  return (
    <Div mt={20}>
      <Div fontWeight={600} fontSize="1.7rem" textAlign="center">
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
          <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
            VOLUME
          </LogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
          >
            51
            <Div>kg</Div>
          </Div>
        </Div>
        <Div>
          <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
            REPS
          </LogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
          >
            51
            <Div>kg</Div>
          </Div>
        </Div>
        <Div>
          <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
            TIME
          </LogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
          >
            51
            <Div>kg</Div>
          </Div>
        </Div>
        <Div>
          <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
            Calorie
          </LogoDiv>
          <Div
            fontSize="2.5rem"
            fontWeight={700}
            displayDiv="flex"
            bgMain="none"
          >
            51
            <Div>kg</Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default StatsDayInfo;
