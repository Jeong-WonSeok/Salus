import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import dayStyles from "../function/styles";

const Day = ({ day, value, onChange, events }) => {
  const context = dayStyles(day, value, events);

  return (
    <TouchableOpacity onPress={() => onChange(day)} style={styles.box}>
      <Text
        style={
          (context.style === "today" ? styles.today : null) ||
          (context.style === "selected" ? styles.selected : null) ||
          (context.style === "other" ? styles.other : null) ||
          (context.style === "event" ? styles.event : null) ||
          styles.default
        }
      >
        {day.format("D").toString()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    color: "#92a3fd",
    width: Dimensions.get("window").width / 7,
    narginRight: 2,
    backgroundColor: "white",
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  today: {
    backgroundColor: "#92a3fd",
    color: "white",
    textAlign: "center",
    height: 30,
    width: 30,
    borderRadius: 15,
    overflow: "hidden",
    fontSize: 18,
  },
  selected: {
    backgroundColor: "#fb816b",
    color: "white",
    textAlign: "center",
    // paddingTop: 2.5,
    height: 30,
    width: 30,
    borderRadius: 15,
    overflow: "hidden",
    fontSize: 18,
  },
  other: {
    color: "lightgray",
    fontSize: 18,
  },
  event: {
    borderWidth: 1,
    borderColor: "#fb816b",
    textAlign: "center",
    // paddingTop: 2.5,
    height: 30,
    width: 30,
    borderRadius: 15,
    fontSize: 18,
  },
  default: {
    fontSize: 18,
  },
});

export default Day;
