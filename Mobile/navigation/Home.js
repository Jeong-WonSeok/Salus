import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from '../theme/global-theme';
import calendar from '../assets/main/calendar.png';
import { todayFormal } from '../utils/todayFormal';
import { LChart, PChart } from '../components/Chart/Chart';

const Home = ({ navigation }) => {
  const thisweek = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
  const timeGoal = Math.random();
  const volumeGoal = Math.random();
  return (
    <Container flexDirection="column">
      <Container flex={1} justifyContent="space-between" mt={15}>
        <Text style={styles.logo}>Salus</Text>
        <View>
          <Image source={calendar} style={styles.image} />
          <Text style={styles.calendar}>캘린더</Text>
        </View>
      </Container>
      <Container flex={9} flexDirection="column">
        <Container flex={4} flexDirection="column">
          <Container justifyContent="space-between">
            <Text style={styles.week}>이번주 운동(볼륨)</Text>
            <Text style={styles.week}>{todayFormal()}</Text>
          </Container>
          <View>
            <LChart data={thisweek} />
          </View>
        </Container>
        <Container flex={2} justifyContent="space-around">
          <Container flexDirection="column">
            <Text style={styles.goal}>시간 목표</Text>
            <PChart data={timeGoal} />
          </Container>
          <Container flexDirection="column">
            <Text style={styles.goal}>볼륨 목표</Text>
            <PChart data={volumeGoal} />
          </Container>
        </Container>
        <Container flex={5} flexDirection="column">
          <Container justifyContent="space-between">
            <Text>완료한 운동</Text>
            <Text>상세보기 ></Text>
          </Container>
          <ScrollView></ScrollView>
        </Container>
        <Button title="go to CurrentExercise" onPress={() => navigation.navigate('Exercise')} />
      </Container>
      <StatusBar style="auto" />
    </Container>
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
  calendar: {
    marginRight: '6%',
    fontSize: '12px',
    color: '#96989d',
  },
  week: { marginEnd: '5%', marginStart: '5%' },
  goal: {
    fontSize: '15px',
    marginBottom: '5%',
  },
});

export default Home;
