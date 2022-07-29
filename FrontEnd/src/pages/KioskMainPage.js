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
import { Div } from "./../styles/kiosk.style";
import CalendarForm from "./../components/Calendar/CalendarForm";
import moment from "moment";
import ButtonComponent from "./../components/Common/ButtonComponent";
import setDailyDatas from "../components/Kiosk/KioskFuntions/setDailyDatas";
import setDayData from "../components/Kiosk/KioskFuntions/setDayData";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F8F9FD;
  }
`;

const KioskMainPage = () => {
  const dummyData = [
    [
      {
        excerciseDay: "2022-07-27T15:00:00.000Z",
        excerciseName: "컬 머신",
        excerciseEnglishName: "Curl Machine",
        excerciseTime: 100,
        excerciseCategory: "상체",
        excerciseStimulate: "이두근",
        excerciseEnglishStimulate: "biceps, obliques, traps",
        weightNow: 50,
        countNow: 10,
        calorie: 500,
      },
      {
        excerciseDay: "2022-07-27T15:00:00.000Z",
        excerciseName: "레그 컬 머신",
        excerciseEnglishName: "Leg Curl Machine",
        excerciseTime: 110,
        excerciseCategory: "하체",
        excerciseStimulate: "허벅지, 종아리",
        excerciseEnglishStimulate: "quads, calves",
        weightNow: 50,
        countNow: 10,
        calorie: 550,
      },
      {
        excerciseDay: "2022-07-26T15:00:00.000Z",
        excerciseName: "체스트 프레스 머신",
        excerciseEnglishName: "Chest Press Machine",
        excerciseTime: 80,
        excerciseCategory: "상체",
        excerciseStimulate: "가슴",
        excerciseEnglishStimulate: "pecs",
        weightNow: 50,
        countNow: 10,
        calorie: 400,
      },
      {
        excerciseDay: "2022-07-25T15:00:00.000Z",
        excerciseName: "펙덱 플라이 머신",
        excerciseEnglishName: "Fly - Pec Dec Machine",
        excerciseTime: 60,
        excerciseCategory: "상체",
        excerciseStimulate: "가슴",
        excerciseEnglishStimulate: "pecs",
        weightNow: 50,
        countNow: 10,
        calorie: 300,
      },
      {
        excerciseDay: "2022-07-25T15:00:00.000Z",
        excerciseName: "숄더프레스 머신",
        excerciseEnglishName: "Sholder Press Machine",
        excerciseTime: 70,
        excerciseCategory: "상체",
        excerciseStimulate: "어깨",
        excerciseEnglishStimulate: "shoulders",
        weightNow: 50,
        countNow: 10,
        calorie: 350,
      },
      {
        excerciseDay: "2022-07-24T15:00:00.000Z",
        excerciseName: "컬 머신",
        excerciseEnglishName: "Curl Machine",
        excerciseTime: 90,
        excerciseCategory: "상체",
        excerciseStimulate: "이두근",
        excerciseEnglishStimulate: "biceps",
        weightNow: 50,
        countNow: 10,
        calorie: 450,
      },
    ],
    [
      {
        excerciseDay: "2022-07-28T15:00:00.000Z",
        totalCategoryTime: 100,
        totalWeight: 50,
        totalCount: 10,
        excerciseCategory: "상체",
        totalCalorie: 500,
      },
      {
        excerciseDay: "2022-07-27T15:00:00.000Z",
        totalCategoryTime: 100,
        totalWeight: 50,
        totalCount: 10,
        excerciseCategory: "상체",
        totalCalorie: 500,
      },
      {
        excerciseDay: "2022-07-26T15:00:00.000Z",
        totalCategoryTime: 110,
        totalWeight: 50,
        totalCount: 10,
        excerciseCategory: "하체",
        totalCalorie: 550,
      },
      {
        excerciseDay: "2022-07-25T15:00:00.000Z",
        totalCategoryTime: 80,
        totalWeight: 50,
        totalCount: 10,
        excerciseCategory: "상체",
        totalCalorie: 400,
      },
      {
        excerciseDay: "2022-07-24T15:00:00.000Z",
        totalCategoryTime: 220,
        totalWeight: 150,
        totalCount: 30,
        excerciseCategory: "상체",
        totalCalorie: 1100,
      },
    ],
  ];
  const [datasHey, setDatasHey] = useState(dummyData[1]);
  // 페이지 전체에 보여줄 상태
  const [selectedDate, setSelectedDate] = useState("2022-07-28T15:00:00.000Z");
  const getData = (data) => {
    setSelectedDate(data);
  };
  // Boad / Calender 선택
  const [isBoard, setIsBoard] = useState(true);
  const saveBoadHandler = (data) => {
    setIsBoard(data);
  };
  // Calender 내용
  const [value, setValue] = useState(moment());
  const [events, setEvents] = useState(dummyData[1]);
  // 근육 한 운동 정보
  const dailyData = setDailyDatas(dummyData[0], selectedDate);
  // 오늘의 기록 정보
  const dayData = setDayData(dummyData[1], selectedDate);
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
          <StatsMuscle muscle={dailyData[0]} />
          <StatsWeekly />
        </CustomDiv>
        <StatsDayInfo
          volume={dayData.totalWeight}
          reps={dayData.totalCount}
          time={dayData.totalCategoryTime}
          calorie={dayData.totalCalorie}
        />
        <SelectBoardView onSelectData={saveBoadHandler} />
        {isBoard ? (
          <Div mt={10}>
            <WeeklySummary datas={datasHey} onChange={getData} />
            <Exercise exerciseList={dailyData[1]} />
          </Div>
        ) : (
          <Div mt={10}>
            <CalendarForm events={events} value={value} onChange={setValue} />
          </Div>
        )}
      </CustomDiv>
      <Div displayDiv="flex" justifyContent="center" mt={40}>
        <ButtonComponent
          buttonText="홈"
          buttonWidth="35vw"
          buttonHeight="3vh"
        />
      </Div>
    </Fragment>
  );
};

export default KioskMainPage;
