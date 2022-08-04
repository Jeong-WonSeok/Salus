import React from 'react';
import { CustomDiv, Div } from '../../styles/kiosk.style';
import styled from 'styled-components';
import RoundChart from '../RoundChart';


const FontCustomDiv = styled(CustomDiv)`
  font-family: 'Pretendard-Regular';
`;

const StatsWeekly = () => {
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
        <Div displayDiv="flex" mb={10}>
          <RoundChart
            roundRatio={0.5}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#92A3FD', '#92A3FD', '#9DCEFF']}
            KEY={1}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={55} mt={20}>
              <Div fontSize="1.5rem">유산소</Div>
              <Div fontSize="3rem">78</Div>
              <Div fontSize="1rem">분</Div>
            </Div>
          </RoundChart>
        </Div>
        <Div displayDiv="flex" mb={10}>
          <RoundChart
            roundRatio={0.9}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#F06875', '#F4929B', '#F4929B']}
            KEY={2}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={60} mt={20}>
              <Div fontSize="1.5rem">상체</Div>
              <Div fontSize="3rem">78</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
        </Div>
        <Div displayDiv="flex" mb={10}>
          <RoundChart
            roundRatio={0.7}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#FEA08F', '#FEA08F', '#FB816B']}
            KEY={3}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={60} mt={20}>
              <Div fontSize="1.5rem">하체</Div>
              <Div fontSize="3rem">12</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
        </Div>
        <Div displayDiv="flex">
          <RoundChart
            roundRatio={0.7}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#B98EF5', '#C9A7F8', '#C9A7F8']}
            KEY={4}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={40} mt={25}>
              <Div fontSize="1.5rem">운동 시간</Div>
              <Div fontSize="3rem">12</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
        </Div>
      </Div>
    </FontCustomDiv>
  );
};

export default StatsWeekly;
