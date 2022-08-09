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
import React, { useState } from 'react';

const Home = ({ navigation }) => {
  const thisweek = [26, 63, 7, 68, 50, 37, 100];
  const timeGoal = 0.59;
  const volumeGoal = 0.45;
  const exerciseData = [
    { title: '숄더 프레스', reps: 10, volume: 200, calorie: 10, time: 200 },
    { title: '레그 프레스', reps: 10, volume: 200, calorie: 10, time: 200 },
    { title: '바벨 로우', reps: 10, volume: 200, calorie: 10, time: 200 },
  ];
  const usergoal = { hour: 1, minute: 20, volume: 20 };
  const [timeModal, setTimeModal] = useState(false);
  const [volumeModal, setVolumeModal] = useState(false);
  const [myHour, setMyHour] = useState(usergoal.hour);
  const [myMinute, setMyMinute] = useState(usergoal.minute);
  const [myVolume, setMyVolume] = useState(usergoal.volume);
  const [nowHour, setNowHour] = useState(usergoal.hour);
  const [nowMinute, setNowMinute] = useState(usergoal.minute);
  const [nowVolume, setNowVolume] = useState(usergoal.volume);
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
                  setTimeModal(!timeModal);
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
                  <PChart data={timeGoal} />
                  <Text style={styles.goal}>시간</Text>
                </Container>
              </Pressable>
              <Pressable onPress={() => setVolumeModal(true)}>
                <Container flexDirection="column">
                  <PChart data={volumeGoal} />
                  <Text style={styles.goal}>볼륨</Text>
                </Container>
              </Pressable>
            </Container>
          </Container>
          <Container flex={5} flexDirection="column">
            <Container justifyContent="space-between" mb={5}>
              <Text style={styles.exercise}>완료한 운동</Text>
              <Text style={styles.detail}>상세보기 &gt;</Text>
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
    color: '#rgba(99, 126, 255, 0.5)',
  },
});

export default Home;
