import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CustomDiv, Div } from "../../styles/kiosk.style";
import RoundChart from "../RoundChart";
import useHttp from './../../customHooks/useHttp';
import { statsWeeklyActions } from "../../store/weekly-workout";

const StatsWeekly = () => {
  //useHttp 로직으로 비동기 요청 및 redux store에 저장
  const { loading, error, apiRequest } = useHttp()
  const dispatch = useDispatch()
  const transformData = useCallback((objData) => {
    dispatch(
      statsWeeklyActions.fetchWeeklyState({
        statsRunning: 10,
        statsUpperBody: 10,
        statsLowerBody: 10,
      })
    );
  })

  useEffect(() => {
    apiRequest({url: 'https://jsonplaceholder.typicode.com/todos/1'}, transformData)
  }, [apiRequest, transformData])
  
  return (
    <CustomDiv
      divWidth={375}
      divHeight={650}
      ml={10}
      bgMain="white"
      borderRadius="10px"
    >
      <Div fontSize="1.5rem" fontWeight={600} mt={10} ml={110} mb={10}>
        이번 주 운동 통계
      </Div>
      <Div>
        <Div mb={20} displayDiv="flex">
          <RoundChart
            roundRatio={0.5}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#92A3FD", "#92A3FD", "#9DCEFF"]}
            KEY={1}
          >
            <Div
              displayDiv="flex"
              ml={65}
              mt={30}
              flexDirection="column"
              alignItems="center"
            >
              <Div mb={2} fontSize="1rem">
                유산소
              </Div>
              <Div fontSize="2rem">78</Div>
              <Div fontSize="1rem">분</Div>
            </Div>
          </RoundChart>
          <Div>이것은 추가 정보 헤이헤이</Div>
        </Div>
        <Div mb={20} displayDiv="flex">
          <RoundChart
            roundRatio={0.9}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#F06875", "#F06875", "#F4929B"]}
            KEY={2}
          >
            <Div
              displayDiv="flex"
              ml={65}
              mt={30}
              flexDirection="column"
              alignItems="center"
            >
              <Div mb={2} fontSize="1rem">
                상체
              </Div>
              <Div fontSize="2rem">78</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
          <Div>이것은 추가 정보 헤이헤이</Div>
        </Div>
        <Div mb={20} displayDiv="flex">
          <RoundChart
            roundRatio={0.7}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#FEA08F", "#FEA08F", "#FB816B"]}
            KEY={3}
          >
            <Div
              displayDiv="flex"
              ml={65}
              mt={30}
              flexDirection="column"
              alignItems="center"
            >
              <Div mb={2} fontSize="1rem">
                하체
              </Div>
              <Div fontSize="2rem">12</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
          <Div>이것은 추가 정보 헤이헤이</Div>
        </Div>
      </Div>
    </CustomDiv>
  );
};

export default StatsWeekly;