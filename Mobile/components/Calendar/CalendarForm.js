import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Day from "./Components/Day";
import buildCalendar from "./function/bulid";

const CalendarForm = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <View style={styles.page}>
      <Text>CalendarForm</Text>
      <View style={styles.calendar}>
        {calendar.map((week, w) => (
          <View style={styles.weeks} key={"week" + w}>
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
      <View style={styles.info}>
        <Text>정보가 올 곳</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: "100%",
  },
  calendar: {
    flex: 1,
    width: "100%",
  },
  info: {
    flex: 1,
    backgroundColor: "blue",
    color: "white",
    width: "100%",
  },
  weeks: {
    width: "100%",
    flexDirection: "row",
    padding: 0,
  },
});

export default CalendarForm;
