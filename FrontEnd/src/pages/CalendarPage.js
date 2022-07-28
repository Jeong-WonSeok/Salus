import React, { useState } from "react";
import CalendarForm from "../components/Calendar/CalendarForm";
import WeeklySummary from "../components/Kiosk/WeeklySummary";
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
  const [datas, setdatas] = useState([
    { day: "2022-7-28", type: "하체", calorie: "200", volume: "100" },
    { day: "2022-7-27", type: "", calorie: "200", volume: "100" },
    { day: "2022-7-26", type: "전신", calorie: "2010", volume: "1200" },
    { day: "2022-7-25", type: "하체", calorie: "200", volume: "100" },
    { day: "2022-7-24", type: "하체", calorie: "200", volume: "100" },
  ]);
  // 페이지 전체에 보여줄 상태
  const [kioskData, setKioskData] = useState("");
  return (
    <div>
      <CalendarForm events={events} value={value} onChange={setValue} />
      <WeeklySummary datas={datas} onChange={setKioskData} />
    </div>
  );
};

export default CalendarPage;
