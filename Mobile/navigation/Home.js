import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { StyleSheet, Text, View } from "react-native";

const NewView = styled.View`
  flex: 1;
  background: blue;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const NewText = styled.Text`
  font-size: 48px;
  color: white;
`;
const index = () => {
  return (
    <NewView>
      <NewText>Open up App.js to start working on your app!</NewText>
      <StatusBar style="auto" />
    </NewView>
  );
};

export default index;
