import { Text } from "react-native";
import CalendarForm from "../components/Calendar/CalendarForm";
import { Container } from "./../theme/global-theme";
import moment from "moment";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import useHttp from "../hooks/useHttp";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  }, [apiRequest, getEventsData, value]);

  return (
    <Container alignItems="stretch" mt={30}>
      {loading ? (
        <Text>loading</Text>
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

export default Calendar;
