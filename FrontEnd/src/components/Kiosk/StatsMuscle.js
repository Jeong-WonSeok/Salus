import React from "react";
import { CustomDiv } from "../../styles/kiosk.style";
import MuscleMan from "./../MuscleMan";
import MuscleWoman from "./../MuscleWoman";
const StatsMuscle = () => {
  const user = { isMale: true, muscles: ["traps", "shoulders"] };
  return (
    <CustomDiv
      bgMain="white"
      divWidth={700}
      divHeight={650}
      ml={10}
      mr={10}
      borderRadius="10px"
    >
      {user.isMale ? (
        <MuscleMan muscles={user.muscles} />
      ) : (
        <MuscleWoman muscles={user.muscles} />
      )}
    </CustomDiv>
  );
};

export default StatsMuscle;
