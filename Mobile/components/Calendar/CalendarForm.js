import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import CalendarHeader from "./Components/CalendarHeader";
import Day from "./Components/Day";
import buildCalendar from "./function/bulid";

const CalendarForm = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <View style={styles.page}>
      <View style={styles.calendar}>
        <CalendarHeader value={value} setValue={onChange} />
        <View style={styles.dayNames}>
          {["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
            <Text style={styles.dayName} key={i}>
              {d}
            </Text>
          ))}
        </View>

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
    width: "100%",
    marginBottom: "5%",
  },
  info: {
    flex: 1,
    backgroundColor: "lightblue",
    color: "white",
    width: "100%",
  },
  weeks: {
    width: "100%",
    flexDirection: "row",
    padding: 0,
  },
  dayNames: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  dayName: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "calc(100% / 7)",
    textAlign: "center",
    color: "#92a3fd",
    fontWeight: "bold",
  },
});

export default CalendarForm;
