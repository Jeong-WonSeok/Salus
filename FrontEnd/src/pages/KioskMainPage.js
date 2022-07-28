import React from "react";
import { CustomDiv } from '../styles/kiosk.style';
import StatsWeekly from '../components/Kiosk/StatsWeekly';
import StatsMuscle from './../components/Kiosk/StatsMuscle';
import NavKiosk from './../components/Kiosk/NavKiosk';
import StatsDayInfo from './../components/Kiosk/StatsDayInfo';
import SelectBoardView from "../components/Kiosk/SelectBoardView";

const KioskMainPage = () => {
  return (
    <CustomDiv>
      <NavKiosk/>
      <CustomDiv displayDiv="flex" mt={20}>
        <StatsMuscle/>
        <StatsWeekly/>
      </CustomDiv>
      <StatsDayInfo/>
      <SelectBoardView/>
    </CustomDiv>
  );
};

export default KioskMainPage;
