import Exercise from "./DailyExercise";
import { Container } from "../../../theme/global-theme";
import React from "react";

const DailyExerciseList = ({ data }) => {
  const exer = data.map((exercise, index) => {
    return (
      <Exercise
        title={exercise.equipmentName}
        reps={exercise.totalCount}
        volume={exercise.totalVolume}
        calorie={exercise.totalCalorie}
        time={exercise.totalTime}
        key={index}
      />
    );
  });
  return (
    <Container flexDirection="column" background={"#EDEEF4"}>
      {exer}
    </Container>
  );
};

export default DailyExerciseList;
