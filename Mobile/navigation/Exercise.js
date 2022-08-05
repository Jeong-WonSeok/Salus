import { View, Text, ScrollView, Dimensions } from "react-native";
import { Image } from "react-native";
import { Container } from "./../theme/global-theme";
import male from "./../assets/muscle/male.png";
import male2 from "./../assets/muscle/male2.png";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

const Exercise = () => {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  return (
    <Container>
      <ScrollView horizontal pagingEnabled contentContainerStyle={styles.scroll}>
        <Container background="#5f9ea0" flex={1} mt={20} width={screenWidth} height={screenHeight/2}>
          <Image source={male} style={styles.image} />
        </Container>
        <Container background="#5f9ea0" flex={1} mt={20} width={screenWidth} height={screenHeight/2}>
          <Image source={male2} style={styles.image} />
        </Container>
      </ScrollView>
      <Container>
        <Text>hello</Text>
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
  scroll: {

  }
});

export default Exercise;
