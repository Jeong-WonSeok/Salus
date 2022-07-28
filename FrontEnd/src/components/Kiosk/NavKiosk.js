import React from 'react'

import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import { LogoDiv } from '../../styles/kiosk.style';
import { Div } from '../../styles/kiosk.style';

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
      <LogoDiv ml={20} fontSize="5.5rem">Salus</LogoDiv>
      <Div mt={30} mr={40} fontSize="3rem">
        {time.format("YYYY-MM-DD HH:mm")}
      </Div>
    </Div>
  );
};

export default NavKiosk;