// 저장된 user rfid 키가 있는 경우 메인페이지로 이동하고 아닌경우 로그인 페이지로 이동

import { useEffect, useState } from 'react';
import { Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo/logo.png';
import { Container } from '../theme/global-theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // rfid키가 저장되어 있는 경우 메인페이지로 가고, 아닌경우 로그인 페이지로 이동
      AsyncStorage.getItem('@user_id').then((value) => {
        // console.log(value);
        navigation.replace(value === null ? 'Login' : 'Home');
      });
    }, 3000);
  }, []);

  return (
    <Container flexDirection="column">
      <LinearGradient colors={['#92a3fd', '#9dceff']} style={styles.background} />
      <Image source={logo} style={styles.logo} />
      <ActivityIndicator animating={animating} color="white" size="large" style={styles.activityIndicator} />
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: screenWidth * 0.8,
    height: (screenWidth * 0.8) / 2.6,
    marginBottom: 50,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
});

export default SplashScreen;
