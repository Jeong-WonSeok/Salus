import React, { Fragment, useState } from "react";
import { CustomDiv } from "../styles/kiosk.style";
import StatsWeekly from "../components/Kiosk/StatsWeekly";
import StatsMuscle from "./../components/Kiosk/StatsMuscle";
import NavKiosk from "./../components/Kiosk/NavKiosk";
import SelectBoardView from "../components/Kiosk/SelectBoardView";
import WeeklySummary from "./../components/Kiosk/WeeklySummary";
import Exercise from "../components/Kiosk/Exercise";
import { createGlobalStyle } from "styled-components";
import { Div } from "./../styles/kiosk.style";
import CalendarForm from "./../components/Calendar/CalendarForm";
import moment from "moment";
import ButtonComponent from "./../components/Common/ButtonComponent";
import setDailyDatas from "../components/Kiosk/KioskFuntions/setDailyDatas";
import styled from "styled-components";
import useHttp from "./../customHooks/useHttp";
import { useEffect } from "react";
import { useCallback } from "react";
import { ChartCalc } from "./../api-request/functions";
import LoadingText from "./../components/Kiosk/LoadingText";
import { useNavigate } from "react-router-dom";

const HomeDiv = styled(Div)`
  position: absolute;
  bottom: 5%;
  left: 32%;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: #F8F9FD;
  }
`;

const KioskMainPage = () => {
  const { apiRequest } = useHttp();
  const [equipmentData, setEquipmentData] = useState();
  const [isBoard, setIsBoard] = useState(true);
  const [selectedDate, setSelectedDate] = useState(moment().format("YY-MM-DD"));
  const [value, setValue] = useState(moment());
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const removeRFID = () => {
    localStorage.removeItem("RFID");
    navigate("/kiosk/login");
  };

  const getEquipmentData = useCallback((data) => {
    setEquipmentData(data);
    setLoading(false);
  }, []);
  //데이터 요청보내는 로직
  useEffect(() => {
    // console.log(localStorage.getItem("RFID"));
    apiRequest(
      {
        url: `http://i7b110.p.ssafy.io:3010/kiosk/login/977237223725`,
      },
      getEquipmentData
    );
  }, [apiRequest, getEquipmentData]);

  // Boad / Calender 선택
  const saveBoadHandler = (data) => {
    setIsBoard(data);
  };
  // 페이지 전체에 보여줄 상태
  const getData = (data) => {
    setSelectedDate(data);
  };

  // Calender 내용

  return (
    <Fragment>
      <GlobalStyle />
      {!loading ? (
        <Fragment>
          <CustomDiv>
            <NavKiosk />
            <CustomDiv
              displayDiv="flex"
              mt={20}
              mr={30}
              ml={30}
              borderRadius="10px"
              justifyContent="space-between"
            >
              <StatsMuscle
                muscle={setDailyDatas(equipmentData[0], selectedDate)[0]}
                date={selectedDate}
                gender={parseInt(equipmentData[0][0].gender)}
              />
              <StatsWeekly
                ratioData={ChartCalc(
                  equipmentData[1],
                  equipmentData[2],
                  equipmentData[3][0]
                )}
              />
            </CustomDiv>
            <SelectBoardView onSelectData={saveBoadHandler} />
            {isBoard ? (
              <Div mt={10}>
                <WeeklySummary
                  datas={equipmentData[0]}
                  onChange={getData}
                  date={selectedDate}
                />
                <Exercise
                  exerciseList={
                    setDailyDatas(equipmentData[0], selectedDate)[1]
                  }
                  chartData={equipmentData[4]}
                />
              </Div>
            ) : (
              <Div mt={10}>
                <CalendarForm
                  events={equipmentData[5]}
                  value={value}
                  onChange={setValue}
                />
              </Div>
            )}
          </CustomDiv>
          <HomeDiv displayDiv="flex" justifyContent="center">
            <ButtonComponent
              buttonText="홈"
              buttonWidth="35vw"
              buttonHeight="3vh"
              onClick={removeRFID}
            />
          </HomeDiv>
        </Fragment>
      ) : (
        <LoadingText />
      )}
    </Fragment>
  );
};

export default KioskMainPage;
