import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container } from '../../theme/global-theme';
import React from 'react';

const screenWidth = Dimensions.get('window').width - 16;

const Exercise = ({ title, reps, volume, calorie, time }) => {
  return (
    <Container flexDirection="column" style={styles.container} mb={10}>
      <Container>
        <Text style={styles.title}>{title}</Text>
      </Container>
      <Container>
        <Container flexDirection="column">
          <Text style={styles.list}>총횟수</Text>
          <Text style={styles.detail}>{reps}</Text>
        </Container>
        <Container flexDirection="column">
          <Text style={styles.list}>총볼륨</Text>
          <Text style={styles.detail}>{volume}</Text>
        </Container>
        <Container flexDirection="column">
          <Text style={styles.list}>칼로리</Text>
          <Text style={styles.detail}>{calorie}</Text>
        </Container>
        <Container flexDirection="column">
          <Text style={styles.list}>시간</Text>
          <Text style={styles.detail}>{time}</Text>
        </Container>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 3,
    width: screenWidth,
    height: 130,
    borderColor: '#96989d',
  },
  title: {
    color: '#92a3fd',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    color: '#96989d',
    marginBottom: 8,
  },
  detail: {
    fontWeight: 'bold',
  },
});

export default Exercise;
