import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import CalendarHeader from "./Components/CalendarHeader";
import Day from "./Components/Day";
import buildCalendar from "./function/bulid";
import React from "react";
import { ScrollView } from "react-native";
import DailyExerciseList from "./Components/DailyExerciseList";
import { Container } from "../../theme/global-theme";

const CalendarForm = ({ value, onChange, events, navigation }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  const [selectData, setSelectData] = useState("");

  useEffect(() => {
    let date = "";
    for (const data of events) {
      if (value.isSame(data.excerciseDay, "day")) {
        date = data;
        setSelectData(data);
      }
    }
    if (value.isSame(date.excerciseDay, "day") !== true) {
      setSelectData("");
    }
  }, [events, value]);

  const exerciseData = [
    {
      equipmentName: "런닝머신",
      totalCount: 0,
      totalVolume: "0",
      totalCalorie: "536",
      totalTime: "75",
    },
    {
      equipmentName: "숄더프레스 머신",
      totalCount: 50,
      totalVolume: "4000",
      totalCalorie: "428",
      totalTime: "60",
    },
    {
      equipmentName: "체스트 프레스 머신",
      totalCount: 40,
      totalVolume: "2600",
      totalCalorie: "286",
      totalTime: "40",
    },
    {
      equipmentName: "토탈 힙",
      totalCount: 25,
      totalVolume: "975",
      totalCalorie: "20563",
      totalTime: "2880",
    },
  ];

  const Items = (selectData, exerciseData) => {
    return (
      <View>
        <Container flexDirection="column" background={"#EDEEF4"}>
          <View style={styles.infoBox}>
            <View style={styles.stair}>
              <View style={styles.column}>
                <Text style={styles.list}>총횟수</Text>
                <Text style={styles.detail}>
                  {selectData?.totalCount || "-"}
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.list}>총볼륨</Text>
                <Text style={styles.detail}>
                  {selectData?.totalWeight || "-"}
                </Text>
              </View>
            </View>
            <View style={styles.stair}>
              <View style={styles.column}>
                <Text style={styles.list}>칼로리</Text>
                <Text style={styles.detail}>
                  {selectData?.totalCalorie || "-"}
                </Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.list}>시간</Text>
                <Text style={styles.detail}>
                  {selectData?.totalCategoryTime || "-"}
                </Text>
              </View>
            </View>
          </View>
        </Container>
        <DailyExerciseList data={exerciseData} color={"#EDEEF4"} />
      </View>
    );
  };

  return (
    <View style={styles.pages}>
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
                events={events}
                onChange={onChange}
              ></Day>
            ))}
          </View>
        ))}
      </View>

      <ScrollView style={styles.info}>
        {Items(selectData, exerciseData)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    width: "100%",
  },
  calendar: {
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "#92a3fd",
    // marginBottom: "5%",
  },
  info: {
    flex: 1,
    backgroundColor: "#EDEEF4",
    width: "100%",
  },
  infoBox: {
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    width: Dimensions.get("window").width - 50,
    height: 130,
    borderColor: "#92a3fd",
    flexDirection: "column",
  },
  weeks: {
    width: "100%",
    flexDirection: "row",
  },
  dayNames: {
    flexDirection: "row",
    // flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
  dayName: {
    flexDirection: "row",
    backgroundColor: "white",
    width: Dimensions.get("window").width / 7,
    textAlign: "center",
    color: "#92a3fd",
    fontWeight: "bold",
  },
  list: {
    color: "#96989d",
    marginBottom: 8,
    textAlign: "center",
  },
  detail: {
    fontWeight: "bold",
    textAlign: "center",
  },
  column: {
    flexDirection: "column",
    width: (Dimensions.get("window").width - 50) / 2,
  },
  stair: {
    flexDirection: "row",
    marginTop: "2%",
  },
});

export default CalendarForm;
