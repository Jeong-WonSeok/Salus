import styled from 'styled-components';

const List = styled.div`
  width: 90%;
  height: 3.44vh;
  border: solid 0.125rem transparent;
  border-radius: 0.3125rem;
  background-image: linear-gradient(#fff, #fff), linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const ExerciseList = (props) => {
  return (
    <List className="d-flex justify-content-around align-items-center mt-2 col-6">
      <Title>{props.title}</Title>
      <Text>{props.volume} Vol</Text>
      <Text>{props.reps} 회</Text>
    </List>
  );
};

export default ExerciseList;
