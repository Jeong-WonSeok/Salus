import React from "react";
import { CustomDiv } from "../../styles/kiosk.style";
import styled from "styled-components";
import MuscleMan from "../muscle/MuscleMan";
import MuscleWoman from "../muscle/MuscleWoman";
import moment from "moment";

const DateDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
  font-size: 30px;
  font-weight: bold;
  font-family: "Pretendard-Regular";
  border: solid 0.125rem transparent;
  border-radius: 30px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  width: 20vw;
  color: #92a3fd;
`;

const StatsMuscle = ({ muscle, date, gender }) => {
  const user = { isMale: gender, muscles: muscle };
  const history = date.slice(3, 8); //22-08-10
  const days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const diff = () => {
    for (const day of days) {
      if (moment().subtract(day, "day").format("MM-DD") === history) {
        if (day === 0) {
          return <DateDiv>오늘</DateDiv>;
        } else return <DateDiv>{day}일 전</DateDiv>;
      }
    }
  };
  return (
    <CustomDiv
      bgMain="white"
      divWidth={740}
      divHeight={800}
      ml={10}
      mr={10}
      borderRadius="10px"
      displayDiv="flex"
      flexDirection="column"
      alignItems="center"
    >
      {diff()}
      {user.isMale ? (
        <MuscleMan muscles={user.muscles} />
      ) : (
        <MuscleWoman muscles={user.muscles} />
      )}
    </CustomDiv>
  );
};

export default StatsMuscle;
