import { useState, useEffect } from 'react';
import { LogoDiv, Div } from '../../styles/kiosk.style';
import moment from 'moment';
import styled from 'styled-components';

const NavDiv = styled(Div)`
  font-family: 'Pretendard-Regular';
`;

const NavKiosk = () => {
  const [time, setTime] = useState(moment());
  //우측 상단 시계 로직
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(moment());
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Div displayDiv="flex" justifyContent="space-between">
      <LogoDiv ml={30} fontSize="5.5rem">
        Salus
      </LogoDiv>
      <NavDiv displayDiv="flex" mr={40} mt={40}>
        <Div fontSize="2.5rem" mr={15} mt={10}>
          {time.format('YYYY년 MM월 DD일')}
        </Div>
        <Div fontSize="3rem" fontWeight="bold">
          {time.format('HH : mm')}
        </Div>
      </NavDiv>
    </Div>
  );
};

export default NavKiosk;
