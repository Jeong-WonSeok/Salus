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
        <Parts source={traps_a} top="-20.9%" left="0.97%" scale="scale(0.05)" />
        <Parts source={traps_b} top="-20.9%" left="8.8%" scale="scale(0.05)" />
        {/*<Parts
          source={shoulders_a}
          top="-18.35%"
          left="-5.19%"
          scale="scale(0.1046)"
        />
        <Parts
          source={shoulders_b}
          top="-18.34%"
          left="15.15%"
          scale="scale(0.105)"
        />
        <Parts
          source={pecs}
          top="-2.15%"
          left="-14.97%"
          width="130%"
          height="50%"
          scale="scale(0.169)"
        />
        <Parts
          source={biceps_a}
          top="-25.15%"
          left="1.72%"
          width="70%"
          height="110%"
          scale="scale(0.097)"
        />
        <Parts
          source={biceps_b}
          top="-25.15%"
          left="28.16%"
          width="70%"
          height="110%"
          scale="scale(0.097)"
        />
        <Parts
          source={forearm_a}
          top="-24.95%"
          left="-18%"
          width="100%"
          height="129%"
          scale="scale(0.111)"
        />
        <Parts
          source={forearm_b}
          top="-24.95%"
          left="17.95%"
          width="100%"
          height="129%"
          scale="scale(0.111)"
        />
        <Parts
          source={obliques}
          top="-15.75%"
          left="9.96%"
          width="79.55%"
          height="98%"
          scale="scale(0.136)"
        />
        <Parts
          source={quads_a}
          top="-15.35%"
          left="12.74%"
          width="61.5%"
          height="141.2%"
          scale="scale(0.177)"
        />
        <Parts
          source={quads_b}
          top="-15.35%"
          left="25.69%"
          width="61.5%"
          height="141.2%"
          scale="scale(0.176)"
        />
        <Parts
          source={calves_a}
          top="19.5%"
          left="18.22%"
          width="45.7%"
          height="121.15%"
          scale="scale(0.161)"
        />
        <Parts
          source={calves_b}
          top="19.5%"
          left="36%"
          width="45.7%"
          height="121.15%"
          scale="scale(0.161)"
        /> */}
        <Image source={female} style={styles.image} />
      </Container>
      <Container
        background="#5f9ea0"
        flex={1}
        width={screenWidth}
        height={screenHeight / 2}
      >
        {/* <Parts
          source={back_traps_a}
          width="100%"
          height="39.6%"
          top="-6.09%"
          left="0.035%"
          scale="scale(0.117)"
        />
        <Parts
          source={back_traps_b}
          top="-26.7%"
          left="12.26%"
          width="76%"
          height="100%"
          scale="scale(0.176)"
        />
        <Parts
          source={back_shoulders_a}
          top="-22.6%"
          left="-10.66%"
          width="100%"
          height="86.3%"
          scale="scale(0.094)"
        />
        <Parts
          source={back_shoulders_b}
          top="-22.1%"
          left="11.26%"
          width="100%"
          height="85.2%"
          scale="scale(0.0945)"
        />
        <Parts
          source={triceps_a}
          top="-33.45%"
          left="-3.96%"
          width="80%"
          height="124.5%"
          scale="scale(0.0945)"
        />
        <Parts
          source={triceps_b}
          top="-34.1%"
          left="24.46%"
          width="80%"
          height="125.8%"
          scale="scale(0.0945)"
        />
        <Parts
          source={back_lats_a}
          top="-26.2%"
          left="9.5%"
          width="70.5%"
          height="118.9%"
          scale="scale(0.1385)"
        />
        <Parts
          source={back_lats_b}
          top="-26.2%"
          left="20.5%"
          width="70.5%"
          height="118.9%"
          scale="scale(0.1385)"
        />
        <Parts
          source={back_lower}
          top="-11%"
          left="8.5%"
          width="83.5%"
          height="100%"
          scale="scale(0.1325)"
        />
        <Parts
          source={back_forearms_a}
          top="-9.46%"
          left="-2.8%"
          width="67%"
          height="101%"
          scale="scale(0.1535)"
        />
        <Parts
          source={back_forearms_b}
          top="-9.46%"
          left="36.15%"
          width="67%"
          height="101%"
          scale="scale(0.1535)"
        />
        <Parts
          source={back_glutes}
          top="6.3%"
          left="-14.75%"
          width="130%"
          height="85%"
          scale="scale(0.159)"
        />
        <Parts
          source={back_hamstrings_a}
          top="-14.1%"
          left="10.15%"
          width="67.3%"
          height="153%"
          scale="scale(0.1645)"
        />
        <Parts
          source={back_hamstrings_b}
          top="-13.9%"
          left="23.1%"
          width="67.3%"
          height="153%"
          scale="scale(0.1645)"
        />
        <Parts
          source={back_calves_a}
          top="32.65%"
          left="16.8%"
          width="45%"
          height="90%"
          scale="scale(0.169)"
        />
        <Parts
          source={back_calves_b}
          top="32.65%"
          left="38.8%"
          width="45%"
          height="90%"
          scale="scale(0.169)"
        /> */}
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
