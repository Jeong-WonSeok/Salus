import React, { useState, useEffect } from "react";

import styled from "styled-components";

import buildCalendar from "./bulid";
import CalendarHeader from "./CalendarHeader";
import Day from "./Day";

const Calendar = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  max-width: 95vw;
  height: 36%;
  margin: 0 auto;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
`;

const DayNames = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  font-size: 1rem;
  text-align: center;
`;

const Week = styled.div`
  flex-direction: row;
  background-color: white;
  width: calc(100% / 7);
  height: 44px;
  max-height: 109px;
  line-height: 44px;
  text-align: center;
  color: #92a3fd;
  font-weight: bold;
`;

const Weeks = styled.div`
  display: flex;
  flex-direction: row;
`;

// {events: 이벤트 목록(이번달꺼), value:기준 날짜, onchange: 기준날짜 변경 함수, click: 클릭 활성화 여부, header: 헤더 활성화 여부}
const CalendarForm = ({
  events,
  value,
  onChange,
  click = false,
  header = false,
}) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <Calendar>
      {header && <CalendarHeader value={value} setValue={onChange} />}
      <Body>
        <DayNames>
          {[
            "Sunday",
            "Monday",
            "Tuseday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((d, i) => (
            <Week key={i}>{d}</Week>
          ))}
        </DayNames>
        {calendar.map((week, w) => (
          <Weeks key={"week" + w}>
            {week.map((day, d) => (
              <Day
                day={day}
                value={value}
                events={events}
                onChange={click ? onChange : () => {}}
                key={"day" + w + d}
              />
            ))}
          </Weeks>
        ))}
      </Body>
    </Calendar>
  );
};

export default CalendarForm;
