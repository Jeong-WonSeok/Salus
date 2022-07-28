import React from 'react'
import { CustomDiv } from '../../styles/kiosk.style';
import MuscleMan from './../MuscleMan';
import MuscleWoman from './../MuscleWoman';
const StatsMuscle = () => {
    const user = { isMale: true, muscles: ["traps", "shoulders"] };
  return (
    <CustomDiv
      divWidth={640}
      divHeight={650}
      className="tr-blue-bg"
      ml={30}
      mr={20}
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