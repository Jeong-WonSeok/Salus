import { View, Text, Image, Dimensions } from "react-native";
import female from "./../../assets/muscle/woman/female.png";
import female2 from "./../../assets/muscle/woman/female2.png";
import { StyleSheet } from "react-native";
import traps_a from "./../../assets/muscle/woman/01.png";
import styled from "styled-components/native";
import traps_b from "./../../assets/muscle/woman/02.png";
import shoulders_a from "./../../assets/muscle/woman/03.png";
import shoulders_b from "./../../assets/muscle/woman/04.png";
import pecs from "./../../assets/muscle/woman/05.png";
import biceps_a from "./../../assets/muscle/woman/06.png";
import biceps_b from "./../../assets/muscle/woman/07.png";
import forearm_a from "./../../assets/muscle/woman/08.png";
import forearm_b from "./../../assets/muscle/woman/09.png";
import obliques from "./../../assets/muscle/woman/10.png";
import quads_a from "./../../assets/muscle/woman/11.png";
import quads_b from "./../../assets/muscle/woman/12.png";
import calves_a from "./../../assets/muscle/woman/13.png";
import calves_b from "./../../assets/muscle/woman/14.png";
import back_traps_a from "./../../assets/muscle/woman/15.png";
import back_traps_b from "./../../assets/muscle/woman/16.png";
import back_shoulders_a from "./../../assets/muscle/woman/17.png";
import back_shoulders_b from "./../../assets/muscle/woman/18.png";
import triceps_a from "./../../assets/muscle/woman/19.png";
import triceps_b from "./../../assets/muscle/woman/20.png";
import back_lats_a from "./../../assets/muscle/woman/21.png";
import back_lats_b from "./../../assets/muscle/woman/22.png";
import back_lower from "./../../assets/muscle/woman/23.png";
import back_forearms_a from "./../../assets/muscle/woman/24.png";
import back_forearms_b from "./../../assets/muscle/woman/25.png";
import back_glutes from "./../../assets/muscle/woman/26.png";
import back_hamstrings_a from "./../../assets/muscle/woman/27.png";
import back_hamstrings_b from "./../../assets/muscle/woman/28.png";
import back_calves_a from "./../../assets/muscle/woman/29.png";
import back_calves_b from "./../../assets/muscle/woman/30.png";
import { Container } from "./../../theme/global-theme";

const Parts = styled.Image`
  position: absolute;
  width: ${(props) => (props.width ? props.width : "90%")};
  height: ${(props) => (props.height ? props.height : "80%")};
  top: ${(props) => (props.top ? props.top : "0%")};
  left: ${(props) => (props.left ? props.left : "0%")};
  transform: ${(props) => (props.scale ? props.scale : "scale(0.1)")};
  z-index: 100;
`;

const MuscleWoman = () => {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;
  return (
    <Container alignItems="stretch">
      <Container flex={1} width={screenWidth} height={screenHeight / 2}>
        <Parts
          source={traps_a}
          top={-75}
          left={4.2}
          resizeMode="contain"
          scale="scale(0.047)"
        />
        <Parts
          source={traps_b}
          top={-75}
          left={31.1}
          resizeMode="contain"
          scale="scale(0.047)"
        />
        <Parts
          source={shoulders_a}
          top={-59.5}
          left={-14.5}
          resizeMode="contain"
          scale="scale(0.087)"
        />
        <Parts
          source={shoulders_b}
          top={-59.5}
          left={50}
          resizeMode="contain"
          scale="scale(0.087)"
        />
        <Parts
          source={pecs}
          top={-52}
          left={17.8}
          resizeMode="contain"
          scale="scale(0.183)"
        />
        <Parts
          source={biceps_a}
          top={-33}
          left={-20.5}
          resizeMode="contain"
          scale="scale(0.11)"
        />
        <Parts
          source={biceps_b}
          top={-33}
          left={56.4}
          resizeMode="contain"
          scale="scale(0.11)"
        />
        <Parts
          source={forearm_a}
          top={5}
          left={-33.5}
          resizeMode="contain"
          scale="scale(0.172)"
        />
        <Parts
          source={forearm_b}
          top={4.6}
          left={68.5}
          resizeMode="contain"
          scale="scale(0.171)"
        />
        <Parts
          source={obliques}
          top={-15.8}
          left={17.7}
          scale="scale(0.137)"
          resizeMode="contain"
        />
        <Parts
          source={quads_a}
          top={67}
          left={-1.9}
          scale="scale(0.28)"
          resizeMode="contain"
        />
        <Parts
          source={quads_b}
          top={67}
          left={37.3}
          scale="scale(0.28)"
          resizeMode="contain"
        />
        <Parts
          source={calves_a}
          top={164.8}
          left={-9.7}
          scale="scale(0.195)"
          resizeMode="contain"
        />
        <Parts
          source={calves_b}
          top={164.4}
          left={44.8}
          scale="scale(0.19)"
          resizeMode="contain"
        />
        <Image source={female} style={styles.image} resizeMode="contain" />
      </Container>
      <Container flex={1} width={screenWidth} height={screenHeight / 2}>
        <Parts
          source={back_traps_a}
          top={-91}
          left={16.8}
          scale="scale(0.135)"
          resizeMode="contain"
        />
        <Parts
          source={back_traps_b}
          top={-53.1}
          left={17.1}
          scale="scale(0.213)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_a}
          top={-67.5}
          left={-18}
          scale="scale(0.092)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_b}
          top={-67.5}
          left={52}
          scale="scale(0.092)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_a}
          top={-36.7}
          left={-24.8}
          scale="scale(0.138)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_b}
          top={-36.7}
          left={58.6}
          scale="scale(0.138)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_a}
          top={-16.2}
          left={2.4}
          scale="scale(0.2)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_b}
          top={-16.2}
          left={31.6}
          scale="scale(0.2)"
          resizeMode="contain"
        />
        <Parts
          source={back_lower}
          top={3.65}
          left={17.3}
          scale="scale(0.155)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_a}
          top={9.4}
          left={-35.5}
          scale="scale(0.176)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_b}
          top={9.38}
          left={69.5}
          scale="scale(0.176)"
          resizeMode="contain"
        />
        <Parts
          source={back_glutes}
          top={40.5}
          left={17.1}
          scale="scale(0.207)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_a}
          top={90.5}
          left={-4.4}
          scale="scale(0.316)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_b}
          top={90.5}
          left={38.5}
          scale="scale(0.314)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_a}
          top={142.6}
          left={-8.4}
          scale="scale(0.144)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_b}
          top={142.6}
          left={42.7}
          scale="scale(0.144)"
          resizeMode="contain"
        />
        <Image source={female2} style={styles.image} resizeMode="contain" />
      </Container>
    </Container>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 800,
    transform: [{ scale: 0.47 }],
  },
});

export default MuscleWoman;
