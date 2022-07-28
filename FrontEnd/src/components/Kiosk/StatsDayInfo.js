import React from 'react';
import { LogoDiv } from '../../styles/kiosk.style';
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
        <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
          VOLUME
          <Div fontSize="2.5rem" fontWeight={700} displayDiv="flex" bgMain="none">
            51
            <Div>kg</Div>
          </Div>
        </LogoDiv>
        <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
          REPS
          <Div fontSize="2.5rem" fontWeight={700} displayDiv="flex" bgMain="none">
            51
            <Div>kg</Div>
          </Div>
        </LogoDiv>
        <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
          TIME
          <Div fontSize="2.5rem" fontWeight={700} displayDiv="flex" bgMain="none">
            51
            <Div>kg</Div>
          </Div>
        </LogoDiv>
        <LogoDiv fontSize="1.5rem" fontWeight={700} flexDirection="column">
          Calorie
          <Div fontSize="2.5rem" fontWeight={700} displayDiv="flex" bgMain="none">
            51
            <Div>kg</Div>
          </Div>
        </LogoDiv>
      </Div>
    </Div>
  );
};

export default StatsDayInfo;