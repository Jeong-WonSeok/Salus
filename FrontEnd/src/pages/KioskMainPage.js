import React, { Fragment, useState } from "react";
import { CustomDiv } from "../styles/kiosk.style";
import StatsWeekly from "../components/Kiosk/StatsWeekly";
import StatsMuscle from "./../components/Kiosk/StatsMuscle";
import NavKiosk from "./../components/Kiosk/NavKiosk";
import StatsDayInfo from "./../components/Kiosk/StatsDayInfo";
import SelectBoardView from "../components/Kiosk/SelectBoardView";
import WeeklySummary from "./../components/Kiosk/WeeklySummary";
import Exercise from "../components/Kiosk/Exercise";
import { createGlobalStyle } from "styled-components";
import { Div } from './../styles/kiosk.style';
import CalendarForm from './../components/Calendar/CalendarForm';
import moment from 'moment';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F8F9FD;
  }
`;

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
    setKioskData(data);
  };
  const exercise = [
    { title: '숄더프레스1', volume: '1000', reps: '125' },
    { title: '레그프레스1', volume: '500', reps: '200' },
    { title: '숄더프레스2', volume: '1000', reps: '125' },
    { title: '레그프레스2', volume: '500', reps: '200' },
    { title: '숄더프레스3', volume: '1000', reps: '125' },
    { title: '레그프레스3', volume: '500', reps: '200' },
    { title: '숄더프레스4', volume: '1000', reps: '125' },
    { title: '레그프레스4', volume: '500', reps: '200' },
  ];
  // Boad / Calender 선택
  const [isBoard, setIsBoard] = useState(true);
  const saveBoadHandler = (data) => {
    setIsBoard(data);
  };
  // Calender 내용
  const [value, setValue] = useState(moment());
  const [events, setEvents] = useState([
    { date: '2022-07-20', calorie: 1000, volume: 800, type: '상체' },
    { date: '2022-07-23', calorie: 1000, volume: 800, type: '하체' },
    { date: '2022-07-19', calorie: 1000, volume: 800, type: '유산소' },
    { date: '2022-07-05', calorie: 1000, volume: 800, type: '상체' },
    { date: '2022-07-15', calorie: 1000, volume: 800, type: '하체' },
    { date: '2022-07-08', calorie: 1000, volume: 800, type: '하체' },
    { date: '2022-07-01', calorie: 1000, volume: 800, type: '유산소' },
    { date: '2022-07-26', calorie: 1000, volume: 800, type: '유산소' },
    { date: '2022-07-07', calorie: 1000, volume: 800, type: '상체' },
    { date: '2022-07-12', calorie: 1000, volume: 800, type: '하체' },
    { date: '2022-07-14', calorie: 1000, volume: 800, type: '유산소' },
  ]);
  return (
    <Fragment>
      <GlobalStyle />
      <CustomDiv>
        <NavKiosk />
        <CustomDiv
          displayDiv="flex"
          mt={20}
          mr={30}
          ml={30}
          borderRadius="10px"
        >
          <StatsMuscle/>
          <StatsWeekly/>
      </CustomDiv>
      <StatsDayInfo />
      <SelectBoardView onSelectData={saveBoadHandler} />
      {isBoard ? (
        <Div mt={10}>
          <WeeklySummary datas={datasHey} onChange={getData} />
          <Exercise exerciseList={exercise} />
        </Div>
      ) : (
        <Div mt={10}>
          <CalendarForm events={events} value={value} onChange={setValue} />
        </Div>
      )}
    </CustomDiv>
      </Fragment>
  );
};

export default KioskMainPage;
