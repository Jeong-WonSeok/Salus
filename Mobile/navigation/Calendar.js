import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import CalendarForm from "../components/Calendar/CalendarForm";
import { Container } from "./../theme/global-theme";
import moment from "moment";
import { useState } from "react";

const Calendar = () => {
  const [value, setValue] = useState(moment());
  return (
    <Container alignItems="stretch" mt={20}>
      <CalendarForm value={value} onChange={setValue}></CalendarForm>
      <ScrollView horizontal pagingEnabled>
        <Text>임시</Text>
      </ScrollView>
    </Container>
  );
};

export default Calendar;
