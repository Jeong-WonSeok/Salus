import React from 'react'
import { CustomDiv } from '../../styles/kiosk.style';
import MuscleMan from './../MuscleMan';
import MuscleWoman from './../MuscleWoman';
const StatsMuscle = () => {
    const user = { isMale: true, muscles: ["traps", "shoulders"] };
    const exercise = [
      { title: "숄더프레스1", volume: "1000", reps: "125" },
      { title: "레그프레스1", volume: "500", reps: "200" },
      { title: "숄더프레스2", volume: "1000", reps: "125" },
      { title: "레그프레스2", volume: "500", reps: "200" },
      { title: "숄더프레스3", volume: "1000", reps: "125" },
      { title: "레그프레스3", volume: "500", reps: "200" },
      { title: "숄더프레스4", volume: "1000", reps: "125" },
      { title: "레그프레스4", volume: "500", reps: "200" },
    ];
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