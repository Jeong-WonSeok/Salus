import React from 'react';
import { CustomDiv, Div } from '../../styles/kiosk.style';
import styled from 'styled-components';
import RoundChart from '../RoundChart';

const FontCustomDiv = styled(CustomDiv)`
  font-family: 'Pretendard-Regular';
`;

const ChartDiv = styled(Div)`
  position: relative;
  &:active {
    & .infoDiv {
      display: flex;
      text-align: center;
      align-items: center;
    }
  }
`;

const InfoDiv = styled(Div)`
  position: absolute;
  height: 3vh;
  width: ${(props) => (props.width ? props.width + 'vw' : '20vw')};
  top: 3vh;
  left: ${(props) => (props.left ? props.left + 'vw' : '')};
  padding: 0.7vh;
  display: none;
  background: white;
  border: 1px solid rgba(99, 126, 255, 0.5);
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.7);
`;

const StatsWeekly = ({ratioData}) => {
  return (
    <FontCustomDiv
      divWidth={250}
      divHeight={800}
      bgMain="white"
      borderRadius="10px"
      displayDiv="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Div fontSize="1.5rem" fontWeight={600} mb={10}>
        이번 주 운동 통계
      </Div> */}
      <Div>
        <ChartDiv displayDiv="flex" mb={10}>
          <RoundChart
            roundRatio={ratioData[0][0] <= 1 ? ratioData[0][0] : 1}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#92A3FD", "#92A3FD", "#9DCEFF"]}
            KEY={1}
          >
            <CustomDiv
              displayDiv="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Div fontSize="1.5rem">유산소</Div>
              <Div fontSize="3rem">{ratioData[0][1]}</Div>
              <Div fontSize="1rem">분</Div>
            </CustomDiv>
          </RoundChart>
          <InfoDiv className="infoDiv" left={-20}>
            헬스장 회원의 평균 유산소 운동 시간 대비 회원님의 운동량입니다.
          </InfoDiv>
        </ChartDiv>
        <ChartDiv displayDiv="flex" mb={10}>
          <RoundChart
            roundRatio={ratioData[1] <= 1 ? ratioData[1] : 1}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#F06875", "#F4929B", "#F4929B"]}
            KEY={2}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center">
              <Div fontSize="1.5rem">상체</Div>
              <Div fontSize="3rem">{parseInt(ratioData[1] * 100)}</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
          <InfoDiv className="infoDiv" left={-23} width={23}>
            헬스장 회원의 평균 상체운동 시간 대비 회원님의 운동 시간입니다.
          </InfoDiv>
        </ChartDiv>
        <ChartDiv displayDiv="flex" mb={10}>
          <RoundChart
            roundRatio={ratioData[2] <= 1 ? ratioData[2] : 1}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#FEA08F", "#FEA08F", "#FB816B"]}
            KEY={3}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center">
              <Div fontSize="1.5rem">하체</Div>
              <Div fontSize="3rem">{parseInt(ratioData[2] * 100)}</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
          <InfoDiv className="infoDiv" left={-23} width={23}>
            헬스장 회원의 평균 하체운동 시간 대비 회원님의 운동 시간입니다.
          </InfoDiv>
        </ChartDiv>
        <ChartDiv displayDiv="flex">
          <RoundChart
            roundRatio={ratioData[3] <= 1 ? ratioData[3] : 1}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#B98EF5", "#C9A7F8", "#C9A7F8"]}
            KEY={4}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center">
              <Div fontSize="1.5rem">운동 시간</Div>
              <Div fontSize="3rem">{parseInt(ratioData[3] * 100)}</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
          <InfoDiv className="infoDiv" left={-21} width={21}>
            오늘 회원님의 헬스장 이용시간 대비 운동시간입니다.
          </InfoDiv>
        </ChartDiv>
      </Div>
    </FontCustomDiv>
  );
};

export default StatsWeekly;
