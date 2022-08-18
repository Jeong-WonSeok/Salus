import { View, Text, Image, Dimensions } from "react-native";
import male from "./../../assets/muscle/man/male.png";
import male2 from "./../../assets/muscle/man/male3.png";
import traps_a from "./../../assets/muscle/man/01.9.png";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import traps_b from "./../../assets/muscle/man/02.png";
import shoulders_a from "./../../assets/muscle/man/03.png";
import shoulders_b from "./../../assets/muscle/man/04.png";
import pecs from "./../../assets/muscle/man/05.png";
import biceps_a from "./../../assets/muscle/man/06.png";
import forearm_a from "./../../assets/muscle/man/08.png";
import biceps_b from "./../../assets/muscle/man/07.png";
import forearm_b from "./../../assets/muscle/man/09.png";
import obliques from "./../../assets/muscle/man/10.png";
import quads_a from "./../../assets/muscle/man/11.png";
import quads_b from "./../../assets/muscle/man/12.png";
import calves_a from "./../../assets/muscle/man/13.png";
import calves_b from "./../../assets/muscle/man/14.png";
import back_traps_a from "./../../assets/muscle/man/15.png";
import back_traps_b from "./../../assets/muscle/man/16.png";
import back_shoulders_a from "./../../assets/muscle/man/17.png";
import back_shoulders_b from "./../../assets/muscle/man/18.png";
import triceps_a from "./../../assets/muscle/man/19.png";
import triceps_b from "./../../assets/muscle/man/20.png";
import back_lats_a from "./../../assets/muscle/man/21.png";
import back_lats_b from "./../../assets/muscle/man/22.png";
import back_lower from "./../../assets/muscle/man/23.png";
import back_forearms_a from "./../../assets/muscle/man/24.png";
import back_forearms_b from "./../../assets/muscle/man/25.png";
import back_glutes from "./../../assets/muscle/man/26.png";
import back_hamstrings_a from "./../../assets/muscle/man/27.png";
import back_hamstrings_b from "./../../assets/muscle/man/28.png";
import back_calves_a from "./../../assets/muscle/man/29.png";
import back_calves_b from "./../../assets/muscle/man/30.png";
import { Container } from "./../../theme/global-theme";
import React from "react";

const Parts = styled.Image`
  position: absolute;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "80%")};
  top: ${(props) => (props.top ? props.top : "0%")};
  left: ${(props) => (props.left ? props.left : "0%")};
  transform: ${(props) => (props.scale ? props.scale : "scale(0.1)")};
  opacity: ${(props) => (props.opacity ? props.opacity : 0)};
  z-index: 100;
`;

const MuscleMan = ({ currentInfo }) => {
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
          top={-91.5}
          left={-14.5}
          resizeMode="contain"
          scale="scale(0.065)"
        />
        <Parts
          source={traps_b}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-91}
          left={14}
          scale="scale(0.065)"
          resizeMode="contain"
        />
        <Parts
          source={shoulders_a}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-69}
          left={-36.5}
          scale="scale(0.1046)"
          resizeMode="contain"
        />
        <Parts
          source={shoulders_b}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-69}
          left={36.3}
          scale="scale(0.1046)"
          resizeMode="contain"
        />
        <Parts
          source={pecs}
          opacity={splitInfo.includes("pecs") ? 1 : 0}
          width={77.5}
          height={40.5}
          top={66.5}
          left={Dimensions.get("window").width / 2 - 38.75}
          scale="scale(1)"
          resizeMode="contain"
        />
        <Parts
          source={biceps_a}
          opacity={splitInfo.includes("biceps") ? 1 : 0}
          top={-38}
          left={-47.5}
          scale="scale(0.133)"
          resizeMode="contain"
        />
        <Parts
          source={biceps_b}
          opacity={splitInfo.includes("biceps") ? 1 : 0}
          top={-38}
          left={47.5}
          scale="scale(0.133)"
          resizeMode="contain"
        />
        <Parts
          source={forearm_a}
          opacity={splitInfo.includes("forearm") ? 1 : 0}
          top={-1.85}
          left={-64.7}
          scale="scale(0.175)"
          resizeMode="contain"
        />
        <Parts
          source={forearm_b}
          opacity={splitInfo.includes("forearm") ? 1 : 0}
          top={-1.85}
          left={64.1}
          scale="scale(0.175)"
          resizeMode="contain"
        />
        <Parts
          source={obliques}
          opacity={splitInfo.includes("obliques") ? 1 : 0}
          top={-25.4}
          left={-1}
          scale="scale(0.166)"
          resizeMode="contain"
        />
        <Parts
          source={quads_a}
          opacity={splitInfo.includes("quads") ? 1 : 0}
          top={57.3}
          left={-23.4}
          scale="scale(0.308)"
          resizeMode="contain"
        />
        <Parts
          source={quads_b}
          opacity={splitInfo.includes("quads") ? 1 : 0}
          top={57.3}
          left={23.2}
          scale="scale(0.309)"
          resizeMode="contain"
        />
        <Parts
          source={calves_a}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={150}
          left={-31.9}
          scale="scale(0.245)"
          resizeMode="contain"
        />
        <Parts
          source={calves_b}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={150.2}
          left={31.7}
          scale="scale(0.245)"
          resizeMode="contain"
        />
        <Image source={male} style={styles.image} resizeMode="contain" />
      </Container>
      <Container flex={1} width={screenWidth} height="60%">
        <Parts
          source={back_traps_a}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-98}
          left={0}
          scale="scale(0.124)"
          resizeMode="contain"
        />
        <Parts
          source={back_traps_b}
          opacity={splitInfo.includes("traps") ? 1 : 0}
          top={-62.2}
          left={1}
          scale="scale(0.214)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_a}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-72.6}
          left={-38.3}
          scale="scale(0.105)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_b}
          opacity={splitInfo.includes("shoulders") ? 1 : 0}
          top={-72.6}
          left={39.3}
          scale="scale(0.105)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_a}
          opacity={splitInfo.includes("triceps") ? 1 : 0}
          top={-42.5}
          left={-49.1}
          scale="scale(0.146)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_b}
          opacity={splitInfo.includes("triceps") ? 1 : 0}
          top={-42.3}
          left={50.7}
          scale="scale(0.147)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_a}
          opacity={splitInfo.includes("lats") ? 1 : 0}
          top={-25.7}
          left={-18.5}
          scale="scale(0.202)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_b}
          opacity={splitInfo.includes("lats") ? 1 : 0}
          top={-25.7}
          left={20.2}
          scale="scale(0.202)"
          resizeMode="contain"
        />
        <Parts
          source={back_lower}
          opacity={splitInfo.includes("lower") ? 1 : 0}
          top={-4.5}
          left={0.5}
          scale="scale(0.164)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_a}
          opacity={splitInfo.includes("forearms") ? 1 : 0}
          top={3.1}
          left={-68}
          scale="scale(0.193)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_b}
          opacity={splitInfo.includes("forearms") ? 1 : 0}
          top={3.2}
          left={69}
          scale="scale(0.19)"
          resizeMode="contain"
        />
        <Parts
          source={back_glutes}
          opacity={splitInfo.includes("glutes") ? 1 : 0}
          top={31.5}
          left={0.5}
          scale="scale(0.197)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_a}
          opacity={splitInfo.includes("hamstrings") ? 1 : 0}
          top={81.5}
          left={-22}
          scale="scale(0.309)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_b}
          opacity={splitInfo.includes("hamstrings") ? 1 : 0}
          top={82}
          left={23.4}
          scale="scale(0.305)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_a}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={138}
          left={-37.7}
          scale="scale(0.186)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_b}
          opacity={splitInfo.includes("calves") ? 1 : 0}
          top={138}
          left={39.2}
          scale="scale(0.186)"
          resizeMode="contain"
        />
        <Image source={male2} style={styles.image} resizeMode="contain" />
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
export default MuscleMan;
