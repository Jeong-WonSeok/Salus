import React from "react";
import moment from "moment";
import RoundChart from "./../components/RoundChart";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import MuscleMan from './../components/MuscleMan';
import MuscleWoman from './../components/MuscleWoman';


// 기본 div 로직
const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + "px" : 0)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  display: ${(props) => (props.displayDiv ? props.displayDiv : 'block')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'none')};
`;

//기본 Div를 상속받아 오버라이딩한 스타일
const LogoDiv = styled(Div)`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "100px")};
  line-height: 136px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
// 기본 Div를 상속받아 크기를 조절할 수 있는 스타일
const CustomDiv = styled(Div)`
  width: ${(props) => props.divWidth};
  height: ${(props) => props.divHeight};
`;

const KioskMainPage = () => {
  const [time, setTime] = useState(moment());
  const [gender, setGender] = useState(true);
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
    <Div>
      <Div displayDiv="flex" justifyContent="space-between">
        <LogoDiv ml={20}>Salus</LogoDiv>
        <Div mt={40} mr={40} fontSize="48px">
          {time.format("YYYY-MM-DD HH:mm")}
        </Div>
      </Div>
      <Div displayDiv="flex" justifyContent="space-between" mt={20}>
        <CustomDiv
          divWidth="650px"
          divHeight="640px"
          className="tr-blue-bg"
          ml={30}
        >
          {/* {gender && (<MuscleMan />)} */}
          {/* {!gender && (<MuscleWoman />)} */}
        </CustomDiv>
        <CustomDiv
          divWidth="370px"
          divHeight="640px"
          className="tr-blue-bg"
          mr={15}
        >
          인체
        </CustomDiv>
      </Div>

      <Div>오늘의 기록</Div>

      <Div>몇 일전 기록 + 기록 상세</Div>

      <RoundChart
        roundRatio={0.9}
        roundWidth="180px"
        roundHeight="180px"
        colorGradient={["#9DCEFF", "#92A3FD", "#6e85f7"]}
      >
        <div>dvsadv</div>
        <div>sadf</div>
      </RoundChart>
    </Div>
  );
};

export default KioskMainPage;
