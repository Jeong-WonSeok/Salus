import styled from 'styled-components';

import ExerciseList from './ExerciseList';

const Div = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
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
