import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "../theme/global-theme";
import calendar from "../assets/main/calendar.png";
import workout from "../assets/main/workout.png";
import { todayFormal } from "../utils/todayFormal";
import { LChart, PChart } from "../components/Chart/Chart";
import ExerciseList from "../components/MainExercise/ExerciseList";
import TimeScroll from "../components/TimeScroll/TimeScroll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Fragment, useState, useCallback, useEffect } from "react";
import useHttp from "../hooks/useHttp";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../assets/logo/logo.png";
import moment from "moment";
import axios from "axios";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const animated = new Animated.Value(1);
const fadeIn = () => {
  Animated.timing(animated, {
    toValue: 0.4,
    duration: 10,
    useNativeDriver: true,
  }).start();
};
const fadeOut = () => {
  Animated.timing(animated, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start();
};

const Home = ({ navigation }) => {
  const { apiRequest } = useHttp();
  const [loading, setLoading] = useState(true);
  const [thisweek, setThisWeek] = useState();
  const [userId, setUserId] = useState();
  const [timeModal, setTimeModal] = useState(false);
  const [volumeModal, setVolumeModal] = useState(false);

  const [percentTime, setPercentTime] = useState();
  const [percentVolume, setPercentVolume] = useState();
  const [exercise, setExercise] = useState();
  // 완료 누르면 설정되는 목표 (데이터에 저장됨)
  const [myHour, setMyHour] = useState('0');
  const [myMinute, setMyMinute] = useState('0');
  const [myVolume, setMyVolume] = useState();
  // 유저가 입력한 목표 (취소 누르면 날아감, 데이터에 저장 X)
  const [nowHour, setNowHour] = useState('0');
  const [nowMinute, setNowMinute] = useState('0');
  const [nowVolume, setNowVolume] = useState();

  const hourHandler = (data) => {
    setNowHour(data);
  };
  const minuteHandler = (data) => {
    setNowMinute(data);
  };
  const thisWeekHandler = (data) => {
    const weekList = [0, 0, 0, 0, 0, 0, 0];
    const days = [1, 2, 3, 4, 5, 6, 7];
    check = () => {
      for (const day of days) {
        for (const record of data[0]) {
          if (
            moment().startOf("week").add(day, "day").format("YY-MM-DD") ===
            record.excerciseDay
          ) {
            weekList[day] = record.totalVolume;
          }
        }
      }
    };
    check();
    return weekList;
  };
  const getData = useCallback((res) => {
    setThisWeek(thisWeekHandler(res));
    setMyHour(Number(res[1][0].targetTime.slice(0, 2)));
    setMyMinute(Number(res[1][0].targetTime.slice(3)));
    setMyVolume(Number(res[1][0].targetVolume));
    setPercentTime(Number(res[2][0].percentTime) * 0.01);
    setPercentVolume(Number(res[2][0].percentVolume) * 0.01);
    setExercise(res[3]);
    setLoading(false);
  }, []);

  // 페이지 렌더시 첫 데이터 받아오기
  useEffect(() => {
    AsyncStorage.getItem("@user_id").then((value) => {
      setUserId(value);
    });
    apiRequest(
      {
        url: `http://i7b110.p.ssafy.io:3010/mobile/user/${userId}`,
      },
      getData
    );
  }, [apiRequest, getData, userId]);

  const timeData = {
    rfidKey: userId,
    targetTime:
      (String(nowHour).length == 1 ? "0" + nowHour : nowHour) +
      ":" +
      (String(nowMinute).length == 1 ? "0" + nowMinute : nowMinute) +
      ":" +
      "00",
  };
  const volumeData = {
    rfidKey: userId,
    targetVolume: nowVolume,
  };

  // 목표 시간 설정
  const TimeFunc = async () => {
    setTimeModal(false);
    axios({
      url: "http://i7b110.p.ssafy.io:3010/mobile/updateTime",
      method: "post",
      data: timeData,
    })
      .then(() => {
        apiRequest(
          {
            url: `http://i7b110.p.ssafy.io:3010/mobile/user/${userId}`,
          },
          getData
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 목표 볼륨 설정
  const VolumeFunc = async () => {
    axios({
      url: "http://i7b110.p.ssafy.io:3010/mobile/updateVolume",
      method: "POST",
      data: volumeData,
    })
      .then(() => {
        apiRequest(
          {
            url: `http://i7b110.p.ssafy.io:3010/mobile/user/${userId}`,
          },
          getData
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const LogoutFunc = () => {
    AsyncStorage.removeItem("@user_id");
    navigation.navigate("SplashScreen");
  };

  return (
    <Fragment>
      {!loading ? (
        <ScrollView style={styles.scrollview}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={timeModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setTimeModal(!timeModal);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>이번주 목표 시간 설정</Text>
                <TimeScroll
                  onHour={hourHandler}
                  onMinute={minuteHandler}
                  myHour={myHour}
                  myMinute={myMinute}
                />
                <View style={styles.modal}>
                  <Pressable
                    style={styles.buttonCancle}
                    onPress={() => setTimeModal(!timeModal)}
                  >
                    <Text style={styles.textStyle}>취소</Text>
                  </Pressable>
                  <Pressable
                    style={styles.buttonSubmit}
                    onPress={() => {
                      TimeFunc();
                    }}
                  >
                    <Text style={styles.textStyle}>완료</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={volumeModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setVolumeModal(!volumeModal);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalViewVolume}>
                <Text style={styles.modalText}>이번주 목표 볼륨 설정</Text>
                <View style={styles.modal}>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                      setNowVolume(Number(text));
                    }}
                    defaultValue={String(myVolume)}
                    keyboardType="numeric"
                    autoFocus={true}
                  />
                  <Text style={styles.unit}>Kg</Text>
                </View>
                <View style={styles.modal}>
                  <Pressable
                    style={styles.buttonCancle}
                    onPress={() => setVolumeModal(!volumeModal)}
                  >
                    <Text style={styles.textStyle}>취소</Text>
                  </Pressable>
                  <Pressable
                    style={styles.buttonSubmit}
                    onPress={() => {
                      setVolumeModal(!volumeModal);
                      VolumeFunc();
                    }}
                  >
                    <Text style={styles.textStyle}>완료</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Container flexDirection="column">
            <Container flex={1} justifyContent="space-between" mt={40} mb={10}>
              <Text style={styles.logo}>Salus</Text>
              <View style={styles.iconStyle}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Exercise");
                    }}
                  >
                    <Image source={workout} style={styles.imageWorkout} resizeMode="contain"/>
                  </TouchableOpacity>
                  <Text style={styles.workoutText}>운동</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Calendar");
                    }}
                  >
                    <Image source={calendar} style={styles.image} />
                  </TouchableOpacity>
                  <Text style={styles.calendartext}>캘린더</Text>
                </View>
              </View>
            </Container>
            <Container flex={9} flexDirection="column">
              <Container flex={6} flexDirection="column">
                <Container justifyContent="space-between">
                  <Text style={styles.exercise}>이번주 운동(볼륨)</Text>
                  <Text style={styles.week}>{todayFormal()}</Text>
                </Container>
                <View>
                  <LChart data={thisweek} />
                </View>
              </Container>
              <Container flex={3} flexDirection="column" mt={10} mb={10}>
                <Text style={styles.exercise}>이번주 목표</Text>
                <Container justifyContent="space-around">
                  <Pressable onPress={() => setTimeModal(true)}>
                    <Container flexDirection="column">
                      <PChart data={percentTime} />
                      <Text style={styles.goal}>시간</Text>
                    </Container>
                  </Pressable>
                  <Pressable onPress={() => setVolumeModal(true)}>
                    <Container flexDirection="column">
                      <PChart data={percentVolume} />
                      <Text style={styles.goal}>볼륨</Text>
                    </Container>
                  </Pressable>
                </Container>
              </Container>
              <Container flex={5} flexDirection="column">
                <Container mb={5}>
                  <Text style={styles.exercise}>오늘 완료한 운동</Text>
                </Container>
                <Container>
                  <ExerciseList data={exercise} />
                </Container>
              </Container>
              <Pressable
                onPressIn={fadeIn}
                onPressOut={fadeOut}
                onPress={LogoutFunc}
              >
                <Animated.View style={styles.button}>
                  <Text style={styles.text}>로그아웃</Text>
                </Animated.View>
              </Pressable>
            </Container>
            <StatusBar style="dark" />
          </Container>
        </ScrollView>
      ) : (
        <Container flexDirection="column">
          <LinearGradient
            colors={["#92a3fd", "#9dceff"]}
            style={styles.background}
          />
          <Image source={logo} style={styles.loadinglogo} />
          <Text style={styles.loadingtext}>운동기록 로딩중...</Text>
          <ActivityIndicator
            animating={true}
            color="white"
            size="large"
            style={styles.activityIndicator}
          />
        </Container>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
    backgroundColor: "white",
  },
  logo: {
    color: '#92a3fd',
    marginLeft: '5%',
    fontSize: 40,
  },
  image: {
    width: 30,
    height: 30,
  },
  calendartext: {
    marginRight: "6%",
    fontSize: 12,
    color: "#96989d",
  },
  week: { marginEnd: '5%', marginStart: '5%' },
  exercise: {
    marginHorizontal: '5%',
    fontSize: 16,
  },
  detail: {
    color: '#96989d',
    marginEnd: '5%',
  },
  goal: {
    fontSize: 15,
    marginVertical: '5%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    flexDirection: 'row',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewVolume: {
    marginBottom: 100,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonSubmit: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#92a3fd',
    width: 100,
    marginHorizontal: 3,
  },
  buttonCancle: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#c0c2c4',
    width: 100,
    marginHorizontal: 3,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 8,
    padding: 10,
    width: 280,
    backgroundColor: '#f8f9fd',
    borderWidth: 1,
    borderColor: 'rgba(99, 126, 255, 0.5)',
  },
  unit: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    lineHeight: 65,
    color: "#rgba(99, 126, 255, 0.5)",
  },
  loadinglogo: {
    width: screenWidth * 0.8,
    height: (screenWidth * 0.8) / 2.6,
    marginBottom: 50,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  loadingtext: {
    color: "white",
  },
  button: {
    opacity: animated,
    width: screenWidth * 0.6,
    height: 48,
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: "#7a91ff",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "#fff",
  },
  loadinglogo: {
    width: screenWidth * 0.8,
    height: (screenWidth * 0.8) / 2.6,
    marginBottom: 50,
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  loadingtext: {
    color: "white",
  },
  button: {
    opacity: animated,
    width: screenWidth * 0.6,
    height: 48,
    padding: 15,
    alignItems: "center",
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: "#7a91ff",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "#fff",
  },
  iconStyle: {
    flexDirection: "row",
  },
  imageWorkout: {
    width: 30,
    height: 30,
    marginRight: 10,
  }
});

export default Home;
