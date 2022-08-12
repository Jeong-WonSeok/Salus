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
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from '../theme/global-theme';
import calendar from '../assets/main/calendar.png';
import { todayFormal } from '../utils/todayFormal';
import { LChart, PChart } from '../components/Chart/Chart';
import ExerciseList from '../components/MainExercise/ExerciseList';
import TimeScroll from '../components/TimeScroll/TimeScroll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const Home = ({ navigation }) => {
  const { apiRequest } = useHttp();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    [
      {
        excerciseDay: '22-08-08',
        totalVolume: '4200',
      },
      {
        excerciseDay: '22-08-09',
        totalVolume: '5250',
      },
      {
        excerciseDay: '22-08-10',
        totalVolume: '9850',
      },
      {
        excerciseDay: '22-08-11',
        totalVolume: '5300',
      },
    ],
    [
      {
        targetTime: '16:00',
        targetVolume: 60000,
      },
    ],
    [
      {
        percentTime: '37',
        percentVolume: '41',
      },
    ],
    [
      {
        equipmentName: '레그 컬 머신',
        totalCount: '50',
        totalVolume: '3200',
        carorie: '143',
        totalTime: '20',
      },
      {
        equipmentName: '숄더프레스 머신',
        totalCount: '20',
        totalVolume: '2100',
        carorie: '150',
        totalTime: '21',
      },
    ],
  ]);
  // const user_id = AsyncStorage.getItem('user_id');
  const user_id = '977231111725';

  const thisweek = [26, 63, 7, 68, 50, 37, 100];
  const timePercent = Number('0.' + data[2][0].percentTime);
  const volumePercent = Number('0.' + data[2][0].percentVolume);
  const exerciseData = data[3][0];
  const targetHour = Number(data[1][0].targetTime.slice(0, 2));
  const targetMinute = Number(data[1][0].targetTime.slice(3));
  const targetVolume = data[1][0].targetVolume;

  const [timeModal, setTimeModal] = useState(false);
  const [volumeModal, setVolumeModal] = useState(false);

  // 완료 누르면 설정되는 목표 (데이터에 저장됨)
  const [myHour, setMyHour] = useState(targetHour);
  const [myMinute, setMyMinute] = useState(targetMinute);
  const [myVolume, setMyVolume] = useState(targetVolume);

  // 유저가 입력한 목표 (취소 누르면 날아감, 데이터에 저장 X)
  const [nowHour, setNowHour] = useState(targetHour);
  const [nowMinute, setNowMinute] = useState(targetMinute);
  const [nowVolume, setNowVolume] = useState(targetVolume);

  const hourHandler = (data) => {
    setNowHour(data);
  };
  const minuteHandler = (data) => {
    setNowMinute(data);
  };

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={timeModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setTimeModal(!timeModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>이번주 목표 시간 설정</Text>
            <TimeScroll onHour={hourHandler} onMinute={minuteHandler} myHour={myHour} myMinute={myMinute} />
            <View style={styles.modal}>
              <Pressable style={styles.buttonCancle} onPress={() => setTimeModal(!timeModal)}>
                <Text style={styles.textStyle}>취소</Text>
              </Pressable>
              <Pressable
                style={styles.buttonSubmit}
                onPress={() => {
                  setMyHour(nowHour);
                  setMyMinute(nowMinute);
                  TimeFunc;
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
          Alert.alert('Modal has been closed.');
          setVolumeModal(!volumeModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewVolume}>
            <Text style={styles.modalText}>이번주 목표 볼륨 설정</Text>
            <View style={styles.modal}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setNowVolume(Number(text))}
                defaultValue={String(myVolume)}
                keyboardType="numeric"
                autoFocus={true}
              />
              <Text style={styles.unit}>Kg</Text>
            </View>
            <View style={styles.modal}>
              <Pressable style={styles.buttonCancle} onPress={() => setVolumeModal(!volumeModal)}>
                <Text style={styles.textStyle}>취소</Text>
              </Pressable>
              <Pressable
                style={styles.buttonSubmit}
                onPress={() => {
                  setMyVolume(nowVolume);
                  setVolumeModal(!volumeModal);
                  VolumeFunc;
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
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Calendar');
              }}
            >
              <Image source={calendar} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.calendartext}>캘린더</Text>
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
                  <PChart data={timePercent} />
                  <Text style={styles.goal}>시간</Text>
                </Container>
              </Pressable>
              <Pressable onPress={() => setVolumeModal(true)}>
                <Container flexDirection="column">
                  <PChart data={volumePercent} />
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
              <ExerciseList data={exerciseData} />
            </Container>
          </Container>
          <Button title="go to CurrentExercise" onPress={() => navigation.navigate('Exercise')} />
        </Container>
        <StatusBar style="dark" />
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginRight: '6%',
    fontSize: 12,
    color: '#96989d',
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
    color: '#rgba(99, 126, 255, 0.5)',
  },
});

export default Home;
