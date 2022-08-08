import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import dayStyles from "../function/styles";

const Day = ({ day, value, onChange }) => {
  const context = dayStyles(day, value);

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={() => onChange(day)}>
        <Text
          style={
            (context.style === "today" ? styles.today : null) ||
            (context.style === "selected" ? styles.selected : null) ||
            (context.style === "other" ? styles.other : null)
          }
        >
          {day.format("D").toString()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    color: "#92a3fd",
    marginLeft: "5%",
    padding: 0,
    margin: 0,
    marginLeft: 0,
    fontSize: 40,
    width: "calc(100% / 7)",
    // outlineColor: "#dcddde",
    // outlineStyle: "solid",
    // outlineWidth: "1px",
    textAlign: "center",
    backgroundColor: "white",
    height: "50px",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  today: {
    backgroundColor: "#92a3fd",
    color: "white",
    textAlign: "center",
    paddingTop: "2.5px",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  },
  selected: {
    backgroundColor: "#fb816b",
    color: "white",
    textAlign: "center",
    paddingTop: "2.5px",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  },
  other: {
    color: "lightgray",
  },
});

export default Day;
