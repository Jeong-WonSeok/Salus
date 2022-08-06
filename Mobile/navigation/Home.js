import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from '../theme/global-theme';
import calendar from '../assets/main/calendar.png';
import { todayFormal } from '../utils/todayFormal';
import { Chart } from '../components/Chart/Chart';

const Home = ({ navigation }) => {
  const data = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];
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
            <Text>이번주 운동(볼륨)</Text>
            <Text>{todayFormal()}</Text>
          </Container>
          <View>
            <Chart data={data} />
          </View>
        </Container>
        <Container flex={2}>
          <Text>이번주 운동(볼륨)</Text>
        </Container>
        <Container flex={5}>
          <Text>이번주 운동(볼륨)</Text>
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
});

export default Home;
