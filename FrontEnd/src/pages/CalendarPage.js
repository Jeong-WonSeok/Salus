import React, { useState } from "react";
import CalendarForm from "../components/Calendar/CalendarForm";
import moment from "moment";

const CalendarPage = () => {
  const [value, setValue] = useState(moment());
  return (
    <div>
      <CalendarForm value={value} onChange={setValue} />
    </div>
  );
};

export default CalendarPage;
