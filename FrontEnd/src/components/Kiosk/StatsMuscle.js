import React from 'react'
import { CustomDiv } from '../../styles/kiosk.style';
const StatsMuscle = () => {
  return (
    <CustomDiv
      divWidth={640}
      divHeight={650}
      className="tr-blue-bg"
      ml={30}
      mr={20}
    >
      {/* 근육 props로 넘김? redux로 내부에서 selector 선언? */}
      {/* {gender && (<MuscleMan />)} */}
      {/* {!gender && (<MuscleWoman />)} */}
    </CustomDiv>
  );
};

export default StatsMuscle;