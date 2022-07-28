import React from 'react';
import { Div } from '../../styles/kiosk.style';

const SelectBoardView = () => {
  return (
    <Div displayDiv="flex" fontSize="2.25rem" ml={40} mt={30} mb={30}>
      <Div fontSize="2rem" fontWeight={600}>
        Board
      </Div>
      <Div fontSize="2rem" ml={10} fontWeight={600}>
        |
      </Div>
      <Div fontSize="2rem" ml={10} fontWeight={600}>
        Calender
      </Div>
    </Div>
  );
};

export default SelectBoardView;