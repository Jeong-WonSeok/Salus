import styled from 'styled-components';

import ExerciseList from './ExerciseList';

const Div = styled.div`
  width: 93vw;
  height: 20.8vh;
  border-radius: 0.625rem;
  margin-left: 3.5vw;
`;

const Exercise = (props) => {
  const lst = props.exerciseList.map((exercise) => (
    <ExerciseList
      title={exercise.title}
      volume={exercise.volume}
      reps={exercise.reps}
      key={`${exercise.title}${Date.now().toString()}`}
    />
  ));
  return <Div className="d-flex flex-column flex-wrap align-items-center white-bg">{lst}</Div>;
};

export default Exercise;
