import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native";

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
`

export default function App() {
  return (
    <NewView>
      <NewText>Open up App.js to start working on your app!</NewText>
      <StatusBar style="auto" />
    </NewView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
