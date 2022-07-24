import React, { useState, useEffect } from "react";

// import styled from "styled-components";
import "./style.css";

import buildCalendar from "./bulid";
import dayStyles, { beforeToday } from "./styles";
import CalendarHeader from "./CalendarHeader";

// const Calendar = styled.div`
//   width: 100%;
//   height: 1000px;
// `;

// const Day = styled.div`
//   position: relative;
//   width: calc(100% / 7);
//   height: 130px;
//   display: inline-block;
//   background-color: white;
//   box-sizing: border-box;
//   border: 0.1px solid black;
//   z-index: 1;
//   text-align: end;
//   padding-right: 1rem;
// `;

const CalendarForm = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <CalendarHeader value={value} setValue={onChange} />
      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div
                className="day"
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarForm;
