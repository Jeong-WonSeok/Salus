import React, { useState, useEffect } from "react";

import styled from "styled-components";

import buildCalendar from "./bulid";
import dayStyles, { beforeToday } from "./styles";
import CalendarHeader from "./CalendarHeader";

const Calendar = styled.div`
  box-sizing: border-box;
  font-size: 1.5rem;
  max-width: 100%;
`;

const Body = styled.div`
  border: 1px solid lightblue;
`;

const DayNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
  align-items: center;
  font-size: 1rem;
  text-align: center;
`;

const Day = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 130px;
  display: inline-block;
  background-color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 1px solid #dcddde;
  z-index: 1;
  text-align: center;
  padding: 1rem 0 1rem 0;

  &div {
    position: relative;
    z-index: 100;
    line-height: 30px;
  }

  & div.before {
    color: lightgray;
    height: 2rem;
  }

  & div.selected {
    background: linear-gradient(284.21deg, #fb816b -7.95%, #fea08f 138.55%);
    color: white;
    justify-content: center;
    margin: 0 auto;
    height: 2rem;
    width: 2.2rem;
    border-radius: 7px;
  }

  & div.today {
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    color: white;
    justify-content: center;
    margin: 0 auto;
    height: 2rem;
    width: 2.2rem;
    border-radius: 7px;
  }
`;

const Week = styled.div`
  background-color: white;
  width: calc(100% / 7);
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #7a91ff;
  font-weight: bold;
`;

const Events = styled.div`
  margin: 0 auto;
  margin-top: 2px;
  height: 1.6rem;
  width: 95%;
  background: linear-gradient(284.21deg, #8260f1 -7.95%, #b19cf7 138.55%);
  border-radius: 5px;
  z-index: 101;
`;

const CalendarForm = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

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
          <div>
            {week.map((day) => (
              <Day
                ondragover="dragover_handler(event);"
                ondrop="drop_handler(event);"
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
                <Events draggable="true" onDrag="dragHandler(e);" />
              </Day>
            ))}
          </div>
        ))}
      </Body>
    </Calendar>
  );
};

export default CalendarForm;
