import { View, Text } from "react-native";
import React from "react";

const Day = ({ day, value, onChange }) => {
  // const context = dayStyles(day, value, events);
  return (
    <View>
      <Text>{day.format("D").toString()}</Text>
    </View>
  );
};

export default Day;
