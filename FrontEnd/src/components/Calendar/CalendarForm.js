import React, { useState, useEffect } from "react";

import styled from "styled-components";

import buildCalendar from "./bulid";
import CalendarHeader from "./CalendarHeader";
import Day from "./Day";

const Calendar = styled.div`
  box-sizing: border-box;
  font-size: 1.5rem;
  max-width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
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
  color: #7a91ff;
  font-weight: bold;
`;

const Weeks = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalendarForm = ({ value, onChange, click = 0 }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  const events = [
    { date: "2022-07-20", calorie: 1000, volume: 800, type: "상체" },
    { date: "2022-07-23", calorie: 1000, volume: 800, type: "하체" },
    { date: "2022-07-19", calorie: 1000, volume: 800, type: "유산소" },
    { date: "2022-07-05", calorie: 1000, volume: 800, type: "상체" },
    { date: "2022-07-15", calorie: 1000, volume: 800, type: "하체" },
    { date: "2022-07-08", calorie: 1000, volume: 800, type: "하체" },
    { date: "2022-07-01", calorie: 1000, volume: 800, type: "유산소" },
    { date: "2022-07-26", calorie: 1000, volume: 800, type: "유산소" },
    { date: "2022-07-07", calorie: 1000, volume: 800, type: "상체" },
    { date: "2022-07-12", calorie: 1000, volume: 800, type: "하체" },
    { date: "2022-07-14", calorie: 1000, volume: 800, type: "유산소" },
  ];

  return (
    <Calendar>
      <CalendarHeader value={value} setValue={onChange} />
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
          ].map((d) => (
            <Week>{d}</Week>
          ))}
        </DayNames>
        {calendar.map((week) => (
          <Weeks>
            {week.map((day) => (
              <Day
                day={day}
                value={value}
                events={events}
                onChange={click ? onChange : () => {}}
              />
            ))}
          </Weeks>
        ))}
      </Body>
    </Calendar>
  );
};

export default CalendarForm;
