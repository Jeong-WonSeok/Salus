import React from "react";
import moment from "moment";
import RoundChart from "./../components/RoundChart";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import MuscleMan from "./../components/MuscleMan";
import MuscleWoman from "./../components/MuscleWoman";

// 기본 div 로직
const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + "px" : 0)};
  padding-bottom: ${(props) => (props.pb ? props.pb + "px" : 0)};
  padding-top: ${(props) => (props.pt ? props.pt + "px" : 0)};
  padding-right: ${(props) => (props.pr ? props.pr + "px" : 0)};
  padding-left: ${(props) => (props.pl ? props.pl + "px" : 0)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  display: ${(props) => (props.displayDiv ? props.displayDiv : "block")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "none"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "none")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  background: ${(props) => (props.bgMain ? props.bgMain : "")} !important;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
`;

//기본 Div를 상속받아 오버라이딩한 스타일
const LogoDiv = styled(Div)`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "100px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background: ${(props) => (props.bgMain ? props.bgMain : "")};
`;
// 기본 Div를 상속받아 크기를 조절할 수 있는 스타일
const CustomDiv = styled(Div)`
  width: ${(props) => props.divWidth};
  height: ${(props) => props.divHeight};
`;

const KioskMainPage = () => {
  const [time, setTime] = useState(moment());
  //우측 상단 시계 로직
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CustomDiv divWidth="1080px">
      <Div displayDiv="flex" justifyContent="space-between">
        <LogoDiv ml={20}>Salus</LogoDiv>
        <Div mt={40} mr={40} fontSize="48px">
          {time.format("YYYY-MM-DD HH:mm")}
        </Div>
      </Div>
      <CustomDiv
        displayDiv="flex"
        justifyContent="space-between"
        mt={20}
        divWidth="1080px"
      >
        <CustomDiv
          divWidth="650px"
          divHeight="640px"
          className="tr-blue-bg"
          ml={30}
        >
          {/* 근육 props로 넘김? redux로 내부에서 selector 선언? */}
          {/* {gender && (<MuscleMan />)} */}
          {/* {!gender && (<MuscleWoman />)} */}
        </CustomDiv>
        <CustomDiv
          divWidth="370px"
          divHeight="640px"
          className="tr-blue-bg"
          mr={15}
        >
          <Div fontSize="24px" fontWeight={600} ml={70}>
            이번 주 운동 통계
          </Div>
          <Div displayDiv="flex">
            <RoundChart
              roundRatio={0.9}
              roundWidth="180px"
              roundHeight="180px"
              colorGradient={["#9DCEFF", "#92A3FD", "#6e85f7"]}
            >
              <Div displayDiv="flex" ml={65} mt={30} flexDirection="column" alignItems="center">
                <Div mb={10}>유산소</Div>
                <Div>78</Div>
                <Div>분</Div>
              </Div>
            </RoundChart>

            <Div>이것은 추가 정보 헤이헤이</Div>
          </Div>
        </CustomDiv>
      </CustomDiv>

      <Div mt={20}>
        <Div fontWeight={600} fontSize="20px" textAlign="center">
          오늘의 기록
        </Div>
        <Div
          displayDiv="flex"
          justifyContent="space-between"
          ml={60}
          mr={60}
          mt={20}
        >
          <LogoDiv fontSize="24px" fontWeight={700} flexDirection="column">
            VOLUME
            <Div
              fontSize="40px"
              fontWeight={700}
              displayDiv="flex"
              bgMain="none"
            >
              51
              <Div>kg</Div>
            </Div>
          </LogoDiv>
          <LogoDiv fontSize="24px" fontWeight={700} flexDirection="column">
            REPS
            <Div
              fontSize="40px"
              fontWeight={700}
              displayDiv="flex"
              bgMain="none"
            >
              51
              <Div>kg</Div>
            </Div>
          </LogoDiv>
          <LogoDiv fontSize="24px" fontWeight={700} flexDirection="column">
            TIME
            <Div
              fontSize="40px"
              fontWeight={700}
              displayDiv="flex"
              bgMain="none"
            >
              51
              <Div>kg</Div>
            </Div>
          </LogoDiv>
          <LogoDiv fontSize="24px" fontWeight={700} flexDirection="column">
            Calorie
            <Div
              fontSize="40px"
              fontWeight={700}
              displayDiv="flex"
              bgMain="none"
            >
              51
              <Div>kg</Div>
            </Div>
          </LogoDiv>
        </Div>
      </Div>

      <Div displayDiv="flex" fontSize="36px" ml={30} mt={30} mb={30}>
        <Div fontSize="30px" fontWeight={600}>
          Board
        </Div>
        <Div fontSize="30px" ml={9} fontWeight={600}>
          |
        </Div>
        <Div fontSize="30px" ml={9} fontWeight={600}>
          Calender
        </Div>
      </Div>
    </CustomDiv>
  );
};

export default KioskMainPage;
