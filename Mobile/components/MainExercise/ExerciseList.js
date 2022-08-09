import Exercise from './Exercise';
import { Container } from '../../theme/global-theme';
import React from 'react';

const ExerciseList = ({ data }) => {
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
};

export default ExerciseList;
