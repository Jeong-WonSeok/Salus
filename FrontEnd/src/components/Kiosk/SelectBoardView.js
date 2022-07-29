import React from 'react';
import { Div } from '../../styles/kiosk.style';

const SelectBoardView = (props) => {
  const boardHandler = () => {
    props.onSelectData(true);
    console.log('board');
  };
  const calendarHandler = () => {
    props.onSelectData(false);
    console.log('calendar');
  };

  return (
    <Div displayDiv="flex" fontSize="2.25rem" ml={40} mt={30} mb={30}>
      <Div fontSize="2rem" fontWeight={600} onClick={boardHandler}>
        Board
      </Div>
      <Div fontSize="2rem" ml={10} fontWeight={600}>
        |
      </Div>
      <Div fontSize="2rem" ml={10} fontWeight={600} onClick={calendarHandler}>
        Calender
      </Div>
    </Div>
  );
};

export default SelectBoardView;
