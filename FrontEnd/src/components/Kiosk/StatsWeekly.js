import React from "react";
import { CustomDiv, Div } from "../../styles/kiosk.style";
import RoundChart from "../RoundChart";

const StatsWeekly = () => {
  return (
    <CustomDiv divWidth={375} divHeight={650} className="tr-blue-bg">
      <Div fontSize="1.5rem" fontWeight={600} mt={10} ml={110} mb={10}>
        이번 주 운동 통계
      </Div>
      <Div>
        <Div mb={20} displayDiv="flex">
          <RoundChart
            roundRatio={0.9}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#9DCEFF", "#92A3FD", "#6e85f7"]}
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
            colorGradient={["#F06875", "#F06875", "white"]}
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
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
          <Div>이것은 추가 정보 헤이헤이</Div>
        </Div>
        <Div mb={20} displayDiv="flex">
          <RoundChart
            roundRatio={0.9}
            roundWidth={180}
            roundHeight={180}
            colorGradient={["#9DCEFF", "#92A3FD", "#6e85f7"]}
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
