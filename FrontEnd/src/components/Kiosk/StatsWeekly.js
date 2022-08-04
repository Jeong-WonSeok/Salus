import React from 'react';
import { CustomDiv, Div } from '../../styles/kiosk.style';
import RoundChart from '../RoundChart';


const StatsWeekly = () => {
  return (
    <CustomDiv
      divWidth={250}
      divHeight={800}
      bgMain="white"
      borderRadius="10px"
      displayDiv="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Div fontSize="1.5rem" fontWeight={600} mb={10}>
        이번 주 운동 통계
      </Div>
      <Div>
        <Div displayDiv="flex">
          <RoundChart
            roundRatio={0.5}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#92A3FD', '#92A3FD', '#9DCEFF']}
            KEY={1}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={65} mt={30}>
              <Div fontSize="1rem">유산소</Div>
              <Div fontSize="2rem">78</Div>
              <Div fontSize="1rem">분</Div>
            </Div>
          </RoundChart>
        </Div>
        <Div displayDiv="flex">
          <RoundChart
            roundRatio={0.9}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#F06875', '#F06875', '#F4929B']}
            KEY={2}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={65} mt={30}>
              <Div fontSize="1rem">상체</Div>
              <Div fontSize="2rem">78</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
        </Div>
        <Div displayDiv="flex">
          <RoundChart
            roundRatio={0.7}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#FEA08F', '#FEA08F', '#FB816B']}
            KEY={3}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={65} mt={30}>
              <Div mb={2} fontSize="1rem">
                하체
              </Div>
              <Div fontSize="2rem">12</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
        </Div>
        <Div displayDiv="flex">
          <RoundChart
            roundRatio={0.7}
            roundWidth={180}
            roundHeight={180}
            colorGradient={['#FEA08F', '#FEA08F', '#FB816B']}
            KEY={3}
          >
            <Div displayDiv="flex" flexDirection="column" alignItems="center" ml={65} mt={30}>
              <Div mb={2} fontSize="1rem">
                하체
              </Div>
              <Div fontSize="2rem">12</Div>
              <Div fontSize="1rem">%</Div>
            </Div>
          </RoundChart>
        </Div>
      </Div>
    </CustomDiv>
  );
};

export default StatsWeekly;
