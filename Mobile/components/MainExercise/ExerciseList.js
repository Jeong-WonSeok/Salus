import Exercise from './Exercise';
import { Container } from '../../theme/global-theme';
import React from 'react';
import { Text, StyleSheet, Dimensions, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ExerciseList = ({ data }) => {
  if (data[0] === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>아직 오늘 완료한 운동이 없습니다.</Text>
        <Text>운동을 시작해주세요!</Text>
      </View>
    );
  } else {
    const exer = data.map((exercise, index) => {
      return (
        <Exercise
          title={exercise.title}
          reps={exercise.reps}
          volume={exercise.volume}
          calorie={exercise.calorie}
          time={exercise.time}
          key={index}
        />
      );
    });
    return <Container flexDirection="column">{exer}</Container>;
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 3,
    width: screenWidth - 16,
    height: 130,
    borderColor: '#92a3fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 10,
  },
});

export default ExerciseList;
