import styled from 'styled-components';

import ExerciseList from './ExerciseList';

const Div = styled.div`
  width: 93vw;
  height: 20.8vh;
  border-radius: 0.625rem;
  margin-left: 3.5vw;
  font-family: 'Pretendard-Regular';
  display: flex;
  // background-color: white;
  background-image: linear-gradient(to top, #e6eaff 20%, white 100%);
`;

const Divnone = styled.div`
  width: 93vw;
  height: 20.8vh;
  border-radius: 0.625rem;
  margin-left: 3.5vw;
  font-family: 'Pretendard-Regular';
  display: flex;
  background-image: linear-gradient(to top, #e6eaff 20%, white 100%);
  justify-content: center;
  align-items: center;
`;

const ListDiv = styled.div`
  width: 100%;
  margin-bottom: vh;
`;

const Text = styled.div`
  font-size: 35px;
`;

const Exercise = (props) => {
  if (props.exerciseList.length === 0) {
    return (
      <Divnone>
        <Text>아직 오늘 완료한 운동이 없습니다.</Text>
      </Divnone>
    );
  } else {
    const odd = props.exerciseList.map((exercise, index) => {
      if (index % 2) {
        return (
          <ExerciseList
            title={exercise.title}
            volume={exercise.volume}
            reps={exercise.reps}
            time={exercise.time}
            chartData={props.chartData}
            key={`${exercise.title}${index}`}
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
            time={exercise.time}
            chartData={props.chartData}
            key={`${exercise.title}${index}`}
          />
        );
      } else {
        return null;
      }
    });
    return (
      <Div>
        <ListDiv>{even}</ListDiv>
        <ListDiv>{odd}</ListDiv>
      </Div>
    );
  }
};

export default Exercise;
