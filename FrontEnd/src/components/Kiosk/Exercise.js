import styled from 'styled-components';

import ExerciseList from './ExerciseList';

const Div = styled.div`
  width: 93vw;
  height: 20.8vh;
  border-radius: 0.625rem;
  margin-left: 3.5vw;
  font-family: 'Pretendard-Regular';
`;

const ListDiv = styled.div`
  width: 100%;
`;

const Exercise = (props) => {
  const odd = props.exerciseList.map((exercise, index) => {
    if (index % 2) {
      return (
        <ExerciseList
          title={exercise.title}
          volume={exercise.volume}
          reps={exercise.reps}
          key={`${exercise.title}${Date.now().toString()}`}
        />
      );
    } else {
      return null;
    }
  });
  const even = props.exerciseList.map((exercise, index) => {
    if (index % 2 === 0) {
      return (
        <ExerciseList
          title={exercise.title}
          volume={exercise.volume}
          reps={exercise.reps}
          key={`${exercise.title}${Date.now().toString()}`}

        />
      );
    } else {
      return null;
    }
  });
  return (
    <Div className="white-bg d-flex">
      <ListDiv>{even}</ListDiv>
      <ListDiv>{odd}</ListDiv>
    </Div>
  );
};

export default Exercise;
