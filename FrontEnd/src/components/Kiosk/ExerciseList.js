import styled from 'styled-components';

const List = styled.div`
  width: 45%;
  height: 66px;
  border: solid 2px transparent;
  border-radius: 5px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const ExerciseList = (props) => {
  return (
    <List className="d-flex justify-content-around align-items-center">
      <Title>{props.title}</Title>
      <Text>{props.volume} Vol</Text>
      <Text>{props.reps} 회</Text>
    </List>
  );
};

export default ExerciseList;
