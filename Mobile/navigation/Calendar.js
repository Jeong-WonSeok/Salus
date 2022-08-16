import { Text, ActivityIndicator, Image, StyleSheet, Dimensions } from "react-native";
import CalendarForm from "../components/Calendar/CalendarForm";
import { Container } from "./../theme/global-theme";
import moment from "moment";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import useHttp from "../hooks/useHttp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../assets/logo/logo.png";

const screenWidth = Dimensions.get("window").width;
const Calendar = ({ navigation }) => {
  const [value, setValue] = useState(moment());
  const { apiRequest } = useHttp();
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);
  const [rfid, setRfid] = useState();
  useEffect(() => {
    AsyncStorage.getItem("@user_id").then((value) => {
      setRfid(value);
    });
  }, []);
  const getEventsData = useCallback((data) => {
    setEvents(data);
    setLoading(false);
  }, []);
  useEffect(() => {
    apiRequest(
      {
        url: `http://i7b110.p.ssafy.io:3010/mobile/calendar/${rfid}/${value.format(
          "YY-MM"
        )}`,
      },
      getEventsData
    );
  }, [apiRequest, getEventsData, value, rfid]);

  return (
    <Container alignItems="stretch">
      {loading ? (
        <Container flexDirection="column" style={styles.background}>
          <LinearGradient
            colors={["#92a3fd", "#9dceff"]}
            style={styles.linearBack}
          />
          <Image source={logo} style={styles.loadinglogo} />
          <Text style={styles.loadingtext}>켈린더 로딩중...</Text>
          <ActivityIndicator
            animating={true}
            color="white"
            size="large"
            style={styles.activityIndicator}
          />
        </Container>
      ) : (
        <CalendarForm
          rfid={rfid}
          value={value}
          onChange={setValue}
          events={events}
          navigation={navigation}
        ></CalendarForm>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  linearBack: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  loadingtext: {
    color: "white",
  },
  loadinglogo: {
    width: screenWidth * 0.8,
    height: (screenWidth * 0.8) / 2.6,
    marginBottom: 50,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
export default Calendar;
