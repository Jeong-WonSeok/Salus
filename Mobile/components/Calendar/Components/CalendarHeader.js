import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CalendarHeader = ({ value, setValue }) => {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => setValue(prevMonth())}
        style={styles.spacing}
      >
        <Text style={styles.text}>{"<"}</Text>
      </TouchableOpacity>
      <View>
        <Text>
          {currMonthName()} {currYear()}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setValue(nextMonth())}
        style={styles.spacing}
      >
        <Text style={styles.text}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    color: "#92a3fd",
    fontWeight: "bold",
    marginTop: "2.5%",
    // marginBottom: "2.5%",
    // height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
  },
  spacing: {
    marginLeft: 5,
    marginRight: 5,
    width: "30%",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CalendarHeader;
