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
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  top: ${(props) => (props.top ? props.top : "0%")};
  left: ${(props) => (props.left ? props.left : "0%")};
  transform: ${(props) => (props.scale ? props.scale : "scale(0.1)")};
  ${(props) => (props.opacity ? props.opacity : 0)};
  z-index: 100;
`;

const MuscleWoman = ({ currentInfo }) => {
  let screenWidth = Dimensions.get("window").width;
  let screenHeight = Dimensions.get("window").height;
  const splitInfo = currentInfo?.equipmentEnglishStimulate
    ? currentInfo?.equipmentEnglishStimulate.split(", ")
    : [];
  return (
    <Container alignItems="stretch">
      <Container flex={1} width={screenWidth} height="60%">
        <Parts
          source={traps_a}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-116.7}
          left={-14.3}
          resizeMode="contain"
          scale="scale(0.044)"
        />
        <Parts
          source={traps_b}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-116.7}
          left={13.6}
          resizeMode="contain"
          scale="scale(0.044)"
        />
        <Parts
          source={shoulders_a}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-100.5}
          left={-33.5}
          resizeMode="contain"
          scale="scale(0.073)"
        />
        <Parts
          source={shoulders_b}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-100.5}
          left={33.3}
          resizeMode="contain"
          scale="scale(0.073)"
        />
        <Parts
          source={pecs}
          opacity={splitInfo.includes("pecs") ? 1 : 0}
          top={-93}
          left={-0.5}
          resizeMode="contain"
          scale="scale(0.17)"
        />
        <Parts
          source={biceps_a}
          opacity={splitInfo.includes("biceps") ? 1 : 0}
          top={-73.5}
          left={-39.7}
          resizeMode="contain"
          scale="scale(0.091)"
        />
        <Parts
          source={biceps_b}
          opacity={splitInfo.includes("biceps") ? 1 : 0}
          top={-73.5}
          left={39.6}
          resizeMode="contain"
          scale="scale(0.091)"
        />
        <Parts
          source={forearm_a}
          opacity={splitInfo.includes("forearm") ? 1 : 0}
          top={-34.4}
          left={-53.2}
          resizeMode="contain"
          scale="scale(0.141)"
        />
        <Parts
          source={forearm_b}
          opacity={splitInfo.includes("forearm") ? 1 : 0}
          top={-34.4}
          left={52.2}
          resizeMode="contain"
          scale="scale(0.141)"
        />
        <Parts
          source={obliques}
          opacity={splitInfo.includes("obliques") ? 1 : 0}
          top={-55.6}
          left={-0.2}
          scale="scale(0.115)"
          resizeMode="contain"
        />
        <Parts
          source={quads_a}
          opacity={splitInfo.includes("quads") ? 1 : 0}
          top={30}
          left={-20.7}
          scale="scale(0.235)"
          resizeMode="contain"
        />
        <Parts
          source={quads_b}
          opacity={splitInfo.includes("quads") ? 1 : 0}
          top={30}
          left={20}
          scale="scale(0.235)"
          resizeMode="contain"
        />
        <Parts
          source={calves_a}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={130}
          left={-28.5}
          scale="scale(0.16)"
          resizeMode="contain"
        />
        <Parts
          source={calves_b}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={130}
          left={27.5}
          scale="scale(0.16)"
          resizeMode="contain"
        />
        <Image source={female} style={styles.image} resizeMode="contain" />
      </Container>
      <Container flex={1} width={screenWidth} height="60%">
        <Parts
          source={back_traps_a}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-130}
          left={-1}
          scale="scale(0.11)"
          resizeMode="contain"
        />
        <Parts
          source={back_traps_b}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-92.3}
          left={-1}
          scale="scale(0.172)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_a}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-106.5}
          left={-36.5}
          scale="scale(0.078)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_b}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-106.5}
          left={34.2}
          scale="scale(0.077)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_a}
          opacity={splitInfo.includes("triceps") ? 1 : 0}
          top={-75.5}
          left={-43.2}
          scale="scale(0.11)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_b}
          opacity={splitInfo.includes("triceps") ? 1 : 0}
          top={-75.5}
          left={41.2}
          scale="scale(0.11)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_a}
          opacity={splitInfo.includes("lats") ? 1 : 0}
          top={-54.5}
          left={-15.7}
          scale="scale(0.163)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_b}
          opacity={splitInfo.includes("lats") ? 1 : 0}
          top={-54.5}
          left={13.7}
          scale="scale(0.163)"
          resizeMode="contain"
        />
        <Parts
          source={back_lower}
          opacity={splitInfo.includes("lower") ? 1 : 0}
          top={-34.5}
          left={-0.9}
          scale="scale(0.127)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_a}
          opacity={splitInfo.includes("forearms") ? 1 : 0}
          top={-28.5}
          left={-54}
          scale="scale(0.143)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_b}
          opacity={splitInfo.includes("forearms") ? 1 : 0}
          top={-28.5}
          left={52}
          scale="scale(0.143)"
          resizeMode="contain"
        />
        <Parts
          source={back_glutes}
          opacity={splitInfo.includes("glutes") ? 1 : 0}
          top={2.5}
          left={-1.2}
          scale="scale(0.188)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_a}
          opacity={splitInfo.includes("hamstrings") ? 1 : 0}
          top={53.2}
          left={-22.5}
          scale="scale(0.255)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_b}
          opacity={splitInfo.includes("hamstrings") ? 1 : 0}
          top={53.2}
          left={20.5}
          scale="scale(0.255)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_a}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={105.8}
          left={-26.9}
          scale="scale(0.118)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_b}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={105.8}
          left={24.9}
          scale="scale(0.118)"
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
    height: 630,
    transform: [{ scale: 0.6 }],
  },
});

export default MuscleWoman;
