import { useState } from 'react';
import styled from 'styled-components';
import ExerciseModal from './ExerciseModal';
import { Div } from './../../styles/web.style';

const List = styled.div`
  width: 90%;
  height: 4vh;
  border: solid 0.125rem transparent;
  border-radius: 0.3125rem;
  background-image: linear-gradient(#fff, #fff), linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  flex: 0 0 auto;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  flex: 1.5;
  text-align: center;
`;

const Title2 = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  flex: 1;
  text-align: center;
`;

const Text = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  flex: 1;
  text-align: center;
`;

const ExerciseList = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal((state) => !state);
  };
  if (props.title === '로잉머신' || props.title === '런닝머신') {
    return (
      <Div>
        <List onClick={toggleModal}>
          <Title2>{props.title}</Title2>
          <Text>{props.time} 분</Text>
        </List>
        <ExerciseModal open={openModal} toggleModal={toggleModal} title={props.title} chartData={props.chartData} />
      </Div>
    );
  } else {
    return (
      <Div>
        <List onClick={toggleModal}>
          <Title>{props.title}</Title>
          <Text>{props.volume} Vol</Text>
          <Text>{props.reps} 회</Text>
        </List>
        <ExerciseModal open={openModal} toggleModal={toggleModal} title={props.title} chartData={props.chartData} />
      </Div>
    );
  }
};

export default ExerciseList;
