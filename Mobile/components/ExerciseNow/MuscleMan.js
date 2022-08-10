import { View, Text, Image, Dimensions } from "react-native";
import male from "./../../assets/muscle/man/male.png";
import male2 from "./../../assets/muscle/man/male2.png";
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
import React from 'react';
 
const Parts = styled.Image`
  position: absolute;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "80%")};
  top: ${(props) => (props.top ? props.top : "0%")};
  left: ${(props) => (props.left ? props.left : "0%")};
  transform: ${(props) => (props.scale ? props.scale : "scale(0.1)")};
  z-index: 100;
`;

const MuscleMan = () => {
   let screenWidth = Dimensions.get("window").width;
   let screenHeight = Dimensions.get("window").height;


  return (
    <Container alignItems="stretch">
      <Container background="#5f9ea0" flex={1} width={screenWidth} height="60%">
        <Parts
          source={traps_a}
          top={-91.5}
          left={-14.5}
          resizeMode="contain"
          scale="scale(0.065)"
        />
        <Parts
          source={traps_b}
          top={-91}
          left={14}
          scale="scale(0.065)"
          resizeMode="contain"
        />
        <Parts
          source={shoulders_a}
          top={-69}
          left={-36.5}
          scale="scale(0.1046)"
          resizeMode="contain"
        />
        <Parts
          source={shoulders_b}
          top={-69}
          left={36.3}
          scale="scale(0.1046)"
          resizeMode="contain"
        />
        <Parts
          source={pecs}
          width={77.5}
          height={40.5}
          top={66.5}
          left={Dimensions.get("window").width / 2 - 38.75}
          scale="scale(1)"
          resizeMode="contain"
        />
        <Parts
          source={biceps_a}
          top={-38}
          left={-47.5}
          scale="scale(0.133)"
          resizeMode="contain"
        />
        <Parts
          source={biceps_b}
          top={-38}
          left={47.5}
          scale="scale(0.133)"
          resizeMode="contain"
        />
        <Parts
          source={forearm_a}
          top={-1.85}
          left={-64.7}
          scale="scale(0.175)"
          resizeMode="contain"
        />
        <Parts
          source={forearm_b}
          top={-1.85}
          left={64.1}
          scale="scale(0.175)"
          resizeMode="contain"
        />
        <Parts
          source={obliques}
          top={-25.4}
          left={-1}
          scale="scale(0.166)"
          resizeMode="contain"
        />
        <Parts
          source={quads_a}
          top={57.3}
          left={-23.4}
          scale="scale(0.308)"
          resizeMode="contain"
        />
        <Parts
          source={quads_b}
          top={57.3}
          left={23.2}
          scale="scale(0.309)"
          resizeMode="contain"
        />
        <Parts
          source={calves_a}
          top={150}
          left={-31.9}
          scale="scale(0.245)"
          resizeMode="contain"
        />
        <Parts
          source={calves_b}
          top={150.2}
          left={31.7}
          scale="scale(0.245)"
          resizeMode="contain"
        />
        <Image source={male} style={styles.image} resizeMode="contain" />
      </Container>
      <Container
        background="#5f9ea0"
        flex={1}
        width={screenWidth}
        height={screenHeight / 2}
      >
        <Parts
          source={back_traps_a}
          top={-99}
          left={0}
          scale="scale(0.124)"
          resizeMode="contain"
        />
        <Parts
          source={back_traps_b}
          top={-63}
          left={1}
          scale="scale(0.22)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_a}
          top={-73.4}
          left={-39.1}
          scale="scale(0.108)"
          resizeMode="contain"
        />
        <Parts
          source={back_shoulders_b}
          top={-73.4}
          left={40.4}
          scale="scale(0.108)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_a}
          top={-42.5}
          left={-50.1}
          scale="scale(0.151)"
          resizeMode="contain"
        />
        <Parts
          source={triceps_b}
          top={-42.5}
          left={52.1}
          scale="scale(0.151)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_a}
          top={-25.6}
          left={-18.5}
          scale="scale(0.205)"
          resizeMode="contain"
        />
        <Parts
          source={back_lats_b}
          top={-25.9}
          left={20.5}
          scale="scale(0.203)"
          resizeMode="contain"
        />
        <Parts
          source={back_lower}
          top={-3.6}
          left={1}
          scale="scale(0.167)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_a}
          top={3.9}
          left={-69.2}
          scale="scale(0.195)"
          resizeMode="contain"
        />
        <Parts
          source={back_forearms_b}
          top={3.9}
          left={71.1}
          scale="scale(0.195)"
          resizeMode="contain"
        />
        <Parts
          source={back_glutes}
          top={33.6}
          left={1}
          scale="scale(0.203)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_a}
          top={85}
          left={-22.3}
          scale="scale(0.315)"
          resizeMode="contain"
        />
        <Parts
          source={back_hamstrings_b}
          top={85.3}
          left={24.3}
          scale="scale(0.311)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_a}
          top={143}
          left={-38.7}
          scale="scale(0.19)"
          resizeMode="contain"
        />
        <Parts
          source={back_calves_b}
          top={143}
          left={40.7}
          scale="scale(0.19)"
          resizeMode="contain"
        />
        <Image source={male2} style={styles.image} />
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
