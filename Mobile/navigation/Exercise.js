import {ScrollView} from "react-native";
import { StyleSheet } from "react-native";
import { Container } from "./../theme/global-theme";
import MuscleMan from './../components/ExerciseNow/MuscleMan';
import MuscleWoman from './../components/ExerciseNow/MuscleWoman';


const Exercise = () => {
  return (
    <Container alignItems="stretch" mt={20}>
      <ScrollView
        horizontal
        pagingEnabled
      >
        <MuscleMan/>
        <MuscleWoman/>
      </ScrollView>
    </Container>
  );
};


export default Exercise;
