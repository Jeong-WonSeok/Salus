import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Day from "./Components/Day";
import buildCalendar from "./function/bulid";

const CalendarForm = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <View>
      <Text>CalendarForm</Text>
      {calendar.map((week, w) => (
        <View key={"week" + w}>
          {week.map((day, d) => (
            <Day
              day={day}
              value={value}
              key={"day" + w + d}
              onChange={onChange}
            ></Day>
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalendarForm;
