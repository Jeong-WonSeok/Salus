import React, { useState } from "react";
import { CustomDiv } from '../styles/kiosk.style';
import StatsWeekly from '../components/Kiosk/StatsWeekly';
import StatsMuscle from './../components/Kiosk/StatsMuscle';
import NavKiosk from './../components/Kiosk/NavKiosk';
import StatsDayInfo from './../components/Kiosk/StatsDayInfo';
import SelectBoardView from "../components/Kiosk/SelectBoardView";
import WeeklySummary from './../components/Kiosk/WeeklySummary';
import Exercise from "../components/Kiosk/Exercise";

const KioskMainPage = () => {
    const [datasHey, setdatasHey] = useState([
      { day: "2022-7-28", type: "하체", calorie: "200", volume: "100" },
      { day: "2022-7-27", type: "", calorie: "200", volume: "100" },
      { day: "2022-7-26", type: "전신", calorie: "2010", volume: "1200" },
      { day: "2022-7-25", type: "하체", calorie: "200", volume: "100" },
      { day: "2022-7-24", type: "하체", calorie: "200", volume: "100" },
    ]);
    // 페이지 전체에 보여줄 상태
    const [kioskData, setKioskData] = useState("");
    const getData = (data) => {
      setKioskData(data)
    }
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
    <CustomDiv>
      <NavKiosk />
      <CustomDiv displayDiv="flex" mt={20}>
        <StatsMuscle />
        <StatsWeekly />
      </CustomDiv>
      <StatsDayInfo />
      <SelectBoardView />
      <WeeklySummary datas={datasHey} onChange={getData} />
      <Exercise exerciseList={exercise} />
    </CustomDiv>
  );
};

export default KioskMainPage;
