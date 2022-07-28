import React, { useState } from "react";
import CalendarForm from "../components/Calendar/CalendarForm";
import moment from "moment";

const CalendarPage = () => {
  const [value, setValue] = useState(moment());
  const [events, setEvents] = useState([
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
  ]);
  return (
    <div>
      <CalendarForm events={events} value={value} onChange={setValue} />
    </div>
  );
};

export default CalendarPage;
