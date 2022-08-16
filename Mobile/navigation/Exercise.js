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
import { StyleSheet, Vibration } from "react-native";
import { Container } from "./../theme/global-theme";
import MuscleMan from "./../components/ExerciseNow/MuscleMan";
import MuscleWoman from "./../components/ExerciseNow/MuscleWoman";
import React, { useEffect, useRef, useState } from "react";
import Animated, { SlideInLeft } from "react-native-reanimated";
import io from "socket.io-client";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
import * as Notifications from "expo-notifications";
// import LottieView from "lottie-react-native";
const screenWidth = Dimensions.get("window").width;

const Exercise = () => {
  // const animation = useRef(null);
  const [currentInfo, setCurrentInfo] = useState(null);
  const [ExerciseNow, setExerciseNow] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeTicking, setTimeTicking] = useState(0);

  // const [userId, setUserId] = useState();
  // useEffect(() => {
  //   AsyncStorage.getItem("@user_id").then((value) => {
  //     setUserId(value);
  //   });
  // }, []);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (userId) {
  //       axios({
  //         method: "get",
  //         url: `http://i7b110.p.ssafy.io:3010/excercise/now/${userId}`,
  //       })
  //         .then((data) => {
  //           setCount(data?.data[0][0].countNow);
  //           setCurrentInfo(data?.data[0][0]);
  //           setExerciseNow(data?.data[1]);
  //           setTimeTicking(data?.data[2][0].isStarted);
  //           setLoading(false);
  //         })
  //         .catch((err) => console.log(err.message));
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [userId]);

  const socket = io.connect(`http://i7b110.p.ssafy.io:3010`);
  useEffect(() => {
    socket.on("mobileData", (data) => {
      setCount(data[0][0].countNow);
      setCurrentInfo(data[0][0]);
      setExerciseNow(data[1]);
      setLoading(false);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    socket.on('equipmentRecieved', (data) => {
      if (!timeTicking && data.isStarted == 1) {
        setTimeTicking(data.isStarted);
      } else if (timeTicking && data.isStarted == 0) {
        setTimeTicking(data.isStarted);
      }
    })

    return () => {
      socket.disconnect();
    }
  }, [timeTicking]);

  const Items = ({ item }) => {
    return (
      <Animated.View entering={SlideInLeft} style={[styles.modalView]}>
        <Text style={styles.workoutType}>{item.equipmentName}</Text>
        {/* <LottieView autoplay={true} source={'./checkmark.json'} ref={animation}></LottieView> */}
        <View>
          <Text style={styles.subtitleText}>중량</Text>
          <Text style={styles.modalText}>{item.weightNow}</Text>
        </View>
        <View>
          <Text style={styles.subtitleText}>횟수</Text>
          <Text style={styles.modalText}>{item.countNow}</Text>
        </View>
      </Animated.View>
    );
  };
  async function countNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${currentInfo?.equipmentName} ${count}회!`,
        body: `${currentInfo?.equipmentName} ${count}회 완료했습니다.`,
      },
      trigger: { seconds: 1 },
    });
  }
  useEffect(() => {
    if (count !== 0 && count % 5 === 0) {
      countNotification();
    }
  }, [count]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds(parseInt(seconds) + 1);

      if (parseInt(seconds) === 60) {
        if (minutes < 10) {
          setMinutes(`0${parseInt(minutes) + 1}`);
        } else {
          setMinutes(parseInt(minutes) + 1);
        }
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const [modalVisible, setModalVisible] = useState(false);
  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <Container alignItems="stretch" flexDirection="column">
      <Container flex={2.8} flexDirection="column" style={styles.boxStyle}>
        <Text style={styles.title}>{currentInfo?.equipmentName ? currentInfo?.equipmentName : '운동 정보 없음'}</Text>
        <Container justifyContent="space-between" borderRadius={10}>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>횟수</Text>
            <Text style={styles.count}>{count ? count : 0}</Text>
          </Container>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>중량</Text>
            <Text style={styles.count}>
              {currentInfo?.weightNow ? currentInfo.weightNow : 0}
            </Text>
          </Container>
        </Container>
        <Container justifyContent="space-between" mt={30} borderRadius={10}>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>칼로리</Text>
            <Text style={styles.count}>
              {currentInfo?.calorie ? currentInfo.calorie : 0}
            </Text>
          </Container>
          <Container flexDirection="column" borderRadius={10}>
            <Text style={styles.category}>시간</Text>
            <Text style={styles.count}>
              {timeTicking
                ? `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`
                : currentInfo?.exTime
                ? currentInfo?.exTime
                : "00:00"}
            </Text>
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
                <View style={styles.TitleStyle}>
                  <Text style={styles.title}>누적 기록</Text>
                </View>
              )}
              ListEmptyComponent={
                <Text style={styles.textNothing}>운동 시작!</Text>
              }
              extraData={ExerciseNow}
            />
          </SafeAreaView>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.ModalClose}
          >
            <View style={styles.button}>
              <Text style={styles.text}>닫기</Text>
            </View>
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
          {currentInfo?.gender ? (
            <MuscleMan currentInfo={currentInfo} />
          ) : (
            <MuscleWoman currentInfo={currentInfo} />
          )}
        </ScrollView>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    color: "#92a3fd",
    marginBottom: 25,
    marginTop: 10,
  },
  category: {
    fontSize: 24,
    color: "#92a3fd",
    fontWeight: "bold",
  },
  count: {
    fontSize: 40,
    fontWeight: "bold",
  },
  boxStyle: {
    width: Dimensions.get("window").width - 20,
    marginLeft: 10,
    marginTop: 80,
    paddingBottom: 30,
    borderColor: "rgba(99, 126, 255, 0.5)",
    borderWidth: 2,
    borderRadius: 10,
  },
  btnPosition: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 100,
    borderRadius: 30,
    marginTop: 20,
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
    margin: 25,
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
    fontSize: 40,
    fontWeight: "bold",
  },
  modalTitle: {
    flexDirection: "row",
  },
  subtitleText: {
    textAlign: "center",
    fontSize: 24,
    color: "#92a3fd",
    fontWeight: "bold",
    marginBottom: 5,
  },
  workoutType: {
    fontSize: 20,
    position: "absolute",
    color: "#92a3fd",
    fontWeight: "bold",
    left: 6,
    top: -28,
    backgroundColor: "white",
  },
  TitleStyle: {
    marginBottom: 20,
  },
  textNothing: {
    marginTop: 230,
    fontSize: 48,
    textAlign: "center",
    color: "#92a3fd",
    fontWeight: "bold",
  },
  button: {
    width: screenWidth * 0.6,
    height: 48,
    alignItems: "center",
    borderRadius: 30,
    marginTop: 70,
    justifyContent: "center",
    backgroundColor: "#7a91ff",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "center",
  },
  ModalClose: {
    position: "absolute",
    bottom: 35,
    left: screenWidth / 2 - 108,
  },
});

export default Exercise;
