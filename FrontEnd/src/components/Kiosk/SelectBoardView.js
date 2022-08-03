import React, { useState } from 'react';
import { Div } from '../../styles/kiosk.style';
import styled from 'styled-components';

const ButtonDiv = styled(Div)`
  height: 3vh;
  width: 40vw;
  border: solid 0.125rem transparent;
  border-radius: 10px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const LeftDiv = styled(Div)`
  width: 50%;
  border-right: solid 0.125rem #92a3fd;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  line-height: 2.5vh;
  background: ${(props) => (props.isBoard ? '#E6EAFF' : '')};
  color: ${(props) => (props.isBoard ? '#2E52FF' : '#92a3fd')};
  font-weight: ${(props) => (props.isBoard ? 'bold' : '')};
`;

const RightDiv = styled(Div)`
  width: 50%;
  text-align: center;
  line-height: 2.5vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${(props) => (!props.isBoard ? '#E6EAFF' : '')};
  color: ${(props) => (!props.isBoard ? '#2E52FF' : '#92a3fd')};
  font-weight: ${(props) => (!props.isBoard ? 'bold' : '')};
`;

const SelectBoardView = (props) => {
  const [isBoard, setIsBoard] = useState(true);
  const boardHandler = () => {
    props.onSelectData(true);
    setIsBoard(true);
  };
  const calendarHandler = () => {
    props.onSelectData(false);
    setIsBoard(false);
  };

  return (
    <ButtonDiv displayDiv="flex" fontSize="2.25rem" ml={40} mt={30} mb={10}>
      <LeftDiv fontSize="2rem" onClick={boardHandler} isBoard={isBoard}>
        Board
      </LeftDiv>
      <RightDiv fontSize="2rem" onClick={calendarHandler} isBoard={isBoard}>
        Calendar
      </RightDiv>
    </ButtonDiv>
  );
};

export default SelectBoardView;
