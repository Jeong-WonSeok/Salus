import { Text } from "react-native";
import CalendarForm from "../components/Calendar/CalendarForm";
import { Container } from "./../theme/global-theme";
import moment from "moment";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import useHttp from "../hooks/useHttp";

const Calendar = ({ navigation }) => {
  const [value, setValue] = useState(moment());
  const rfid = "977237223725";
  const { apiRequest } = useHttp();
  const [events, setEvents] = useState();
  const [dailyExerciseDatas, setDailyExerciseDatas] = useState();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
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
  }, [apiRequest, getEventsData, value]);
  const getDailyData = useCallback((data) => {
    setDailyExerciseDatas(data);
    setLoading2(false);
  }, []);
  useEffect(() => {
    apiRequest(
      {
        url: `http://i7b110.p.ssafy.io:3010/mobile/calendarDetail/${rfid}/${value.format(
          "YY-MM-DD"
        )}`,
      },
      getDailyData
    );
  }, [apiRequest, getDailyData, value]);

  return (
    <Container alignItems="stretch" mt={30}>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <CalendarForm
          value={value}
          onChange={setValue}
          events={events}
          navigation={navigation}
        ></CalendarForm>
      )}
    </Container>
  );
};

export default Calendar;
