import {
  ScrollView,
  Text,
  Dimensions,
  Modal,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  SafeAreaView,

} from "react-native";
import { StyleSheet } from "react-native";
import { Container } from "./../theme/global-theme";
import MuscleMan from "./../components/ExerciseNow/MuscleMan";
import MuscleWoman from "./../components/ExerciseNow/MuscleWoman";
import { useState } from "react";
import Animated, { SlideInLeft } from "react-native-reanimated";

let cnt = 200;

const Exercise = () => {
  const [ExerciseNow, setExerciseNow] = useState([
    { id: 1, weight: 300, count: 10 },
    { id: 2, weight: 300, count: 10 },
    { id: 3, weight: 300, count: 10 },
    { id: 5, weight: 300, count: 10 },
    { id: 6, weight: 300, count: 10 },
    { id: 7, weight: 300, count: 10 },
    { id: 8, weight: 300, count: 10 },
    { id: 9, weight: 300, count: 10 },
    { id: 10, weight: 300, count: 10 },
    { id: 11, weight: 300, count: 10 },
    { id: 12, weight: 300, count: 10 },
    { id: 13, weight: 300, count: 10 },
  ]);

  const Items = ({ item }) =>{
    return (
    <Animated.View entering={SlideInLeft} style={[styles.modalView]}>
      <View>
        <Text style={styles.subtitleText}>중량</Text>
        <Text style={styles.modalText}>{item.weight}</Text>
      </View>
      <View>
        <Text style={styles.subtitleText}>횟수</Text>
        <Text style={styles.modalText}>{item.count}</Text>
      </View>
    </Animated.View>
  )};

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container alignItems="stretch" flexDirection="column">
      <Text style={styles.title}>레그 프레스</Text>
      <Container flex={2} flexDirection="column" style={styles.boxStyle}>
        <Container justifyContent="space-between" borderRadius={10}>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>횟수</Text>
            <Text style={styles.count}>10</Text>
          </Container>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>볼륨</Text>
            <Text style={styles.count}>300</Text>
          </Container>
        </Container>
        <Container justifyContent="space-between" mt={10} borderRadius={10}>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>칼로리</Text>
            <Text style={styles.count}>300</Text>
          </Container>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>시간</Text>
            <Text style={styles.count}>3:15</Text>
          </Container>
        </Container>
      </Container>
      <View style={styles.btnPosition}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <SafeAreaView>
            <FlatList
              data={ExerciseNow}
              renderItem={Items}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={() => (
                <View>
                  <Text style={styles.title}>누적 기록</Text>
                </View>
              )}
              ListEmptyComponent={<Text>운동을 시작하세요!</Text>}
              extraData={ExerciseNow}
            />
          </SafeAreaView>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>닫기</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() =>
              setExerciseNow([
                { id: cnt++, weight: 3000, count: 3000 },
                ...ExerciseNow,
              ])
            }
          >
            <Text style={styles.textStyle}>추가하기</Text>
          </Pressable>
        </Modal>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.btnFont}>운동 기록</Text>
        </TouchableOpacity>
      </View>
      <Container flex={5}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <MuscleMan />
          <MuscleWoman />
        </ScrollView>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
    fontWeight: "bold",
  },
  category: {
    fontSize: 24,
    color: "blue",
  },
  count: {
    fontSize: 40,
    fontWeight: "bold",
  },
  boxStyle: {
    width: Dimensions.get("window").width - 20,
    marginLeft: 10,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
  },
  btnPosition: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 100,
    borderRadius: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  btnStyle: {
    width: "25%",
    backgroundColor: "orange",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginRight: 10,
  },
  btnFont: {
    fontSize: 16,
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    position: "absolute",
    bottom: Dimensions.get("window").height / 16,
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 16,
    marginLeft: Dimensions.get("window").width / 6,
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  modalTitle: {
    flexDirection: "row",
  },
  subtitleText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5,
  },
});

export default Exercise;
