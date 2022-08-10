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
      <Container
        background="#5f9ea0"
        flex={1}
        width={screenWidth}
        height={screenHeight / 2}
      >
        <Parts
          source={traps_a}
          top={-78.3}
          left={3.7}
          resizeMode="contain"
          scale="scale(0.051)"
        />
        <Parts
          source={traps_b}
          top={-78.1}
          left={31.8}
          resizeMode="contain"
          scale="scale(0.05)"
        />
        <Parts
          source={shoulders_a}
          top={-62}
          left={-15}
          resizeMode="contain"
          scale="scale(0.09)"
        />
        <Parts
          source={shoulders_b}
          top={-62}
          left={51}
          resizeMode="contain"
          scale="scale(0.09)"
        />
        <Parts
          source={pecs}
          top={-54.5}
          left={18}
          resizeMode="contain"
          scale="scale(0.185)"
        />
        <Parts
          source={biceps_a}
          top={-35.3}
          left={-21.7}
          resizeMode="contain"
          scale="scale(0.114)"
        />
        <Parts
          source={biceps_b}
          top={-35.3}
          left={56.9}
          resizeMode="contain"
          scale="scale(0.114)"
        />
        <Parts
          source={forearm_a}
          top={3.64}
          left={-34.7}
          resizeMode="contain"
          scale="scale(0.176)"
        />
        <Parts
          source={forearm_b}
          top={3.63}
          left={70.1}
          resizeMode="contain"
          scale="scale(0.175)"
        />
        <Parts
          source={obliques}
          top="-14.59%"
          left="10.15%"
          width="79.55%"
          height="100%"
          scale="scale(0.115)"
        />
        <Parts
          source={quads_a}
          top="7.85%"
          left="25.8%"
          width="37%"
          height="100%"
          scale="scale(0.23)"
        />
        <Parts
          source={quads_b}
          top="7.85%"
          left="37.1%"
          width="37%"
          height="100%"
          scale="scale(0.23)"
        />
        <Parts
          source={calves_a}
          top="17.8%"
          left="16.68%"
          width="51%"
          height="132.5%"
          scale="scale(0.124)"
        />
        <Parts
          source={calves_b}
          top="15.7%"
          left="30.67%"
          width="54%"
          height="137%"
          scale="scale(0.115)"
        />
        <Image source={female} style={styles.image} />
      </Container>
      <Container
        background="#5f9ea0"
        flex={1}
        width={screenWidth}
        height={screenHeight / 2}
      >
        <Parts
          source={back_traps_a}
          width="100%"
          height="32.6%"
          top="-0.09%"
          left="-0.315%"
          scale="scale(0.13)"
        />
        <Parts
          source={back_traps_b}
          top="-24.1%"
          left="8.52%"
          width="82.5%"
          height="100%"
          scale="scale(0.168)"
        />
        <Parts
          source={back_shoulders_a}
          top="-25.5%"
          left="-10%"
          width="100%"
          height="95%"
          scale="scale(0.079)"
        />
        <Parts
          source={back_shoulders_b}
          top="-25.5%"
          left="9.45%"
          width="100%"
          height="95%"
          scale="scale(0.078)"
        />
        <Parts
          source={triceps_a}
          top="-19.75%"
          left="15.1%"
          width="46%"
          height="100%"
          scale="scale(0.112)"
        />
        <Parts
          source={triceps_b}
          top="-19.75%"
          left="38.4%"
          width="46%"
          height="100%"
          scale="scale(0.112)"
        />
        <Parts
          source={back_lats_a}
          top="-14.3%"
          left="21.95%"
          width="47.5%"
          height="100%"
          scale="scale(0.1625)"
        />
        <Parts
          source={back_lats_b}
          top="-14.3%"
          left="30.1%"
          width="47.5%"
          height="100%"
          scale="scale(0.1625)"
        />
        <Parts
          source={back_lower}
          top="-9.1%"
          left="9.5%"
          width="80.5%"
          height="100%"
          scale="scale(0.125)"
        />
        <Parts
          source={back_forearms_a}
          top="-7.46%"
          left="12.6%"
          width="45%"
          height="100%"
          scale="scale(0.1435)"
        />
        <Parts
          source={back_forearms_b}
          top="-7.46%"
          left="41.9%"
          width="45%"
          height="100%"
          scale="scale(0.1435)"
        />
        <Parts
          source={back_glutes}
          top="17.6%"
          left="-0.26%"
          width="100%"
          height="66%"
          scale="scale(0.188)"
        />
        <Parts
          source={back_hamstrings_a}
          top="13.9%"
          left="25.75%"
          width="36%"
          height="100%"
          scale="scale(0.255)"
        />
        <Parts
          source={back_hamstrings_b}
          top="13.9%"
          left="37.75%"
          width="36%"
          height="100%"
          scale="scale(0.255)"
        />
        <Parts
          source={back_calves_a}
          top="27.65%"
          left="13.55%"
          width="58%"
          height="100%"
          scale="scale(0.118)"
        />
        <Parts
          source={back_calves_b}
          top="27.65%"
          left="27.95%"
          width="58%"
          height="100%"
          scale="scale(0.118)"
        />
        <Image source={female2} style={styles.image} />
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
