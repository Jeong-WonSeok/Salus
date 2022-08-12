import React, { useState, useRef } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  Pressable,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from '../theme/global-theme';
import { validateEmail, removeWhitespace } from '../utils/login';
import logo from '../assets/logo/logo.png';
import axios from 'axios';

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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [rfid, setRfid] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [rfidErrorMessage, setRfidErrorMessage] = useState('');
  const ref_input2 = useRef();

  const handleEmailChange = (email) => {
    clearTimeout(searchWaiting);
    const searchWaiting = setTimeout(() => {
      const changedEmail = removeWhitespace(email);
      setEmail(changedEmail);
      setEmailErrorMessage(validateEmail(changedEmail) ? '' : '이메일 형식을 확인해주세요!');
    }, 2000);
  };

  const handleRfidChange = (rfid) => {
    setRfid(removeWhitespace(rfid));
  };

  const data = {
    rfidKey: rfid,
    email: email,
  };

  const LoginFunc = async () => {
    axios({
      url: 'http://i7b110.p.ssafy.io:3010/mobile/login',
      method: 'post',
      data: data,
    })
      .then((res) => {
        if (res.data.rfidKey === 'failed') {
          setRfidErrorMessage('이메일과 카드키 번호를 다시 확인해주세요');
        } else {
          AsyncStorage.setItem('@user_id', String(res.data.rfidKey));
          navigation.replace('Home');
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container flexDirection="column">
          <LinearGradient colors={['#92a3fd', '#9dceff']} style={styles.background} />
          <Image source={logo} style={styles.logo} />
          <TextInput
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            style={emailErrorMessage ? styles.err : styles.input}
            autoCapitalize="none"
            placeholder="이메일"
            returnKeyType="next"
            onSubmitEditing={() => {
              ref_input2.current.focus();
            }}
            blurOnSubmit={false}
          />
          <Text style={styles.errtext}>{emailErrorMessage}</Text>
          <TextInput
            onChangeText={handleRfidChange}
            style={rfidErrorMessage ? styles.err : styles.input}
            autoCapitalize="none"
            placeholder="헬스장에서 받은 카드키 번호를 입력해주세요."
            ref={ref_input2}
          />
          <Text style={styles.errtext}>{rfidErrorMessage}</Text>
          <Pressable
            onPressIn={fadeIn}
            onPressOut={fadeOut}
            onPress={LoginFunc}
            disabled={emailErrorMessage ? true : false}
          >
            <Animated.View style={[styles.button, emailErrorMessage ? styles.disabled : null]}>
              <Text style={styles.text}>로그인</Text>
            </Animated.View>
          </Pressable>
          <Button title="캘린더" onPress={() => navigation.navigate('Calendar')} />
          <Button title="메인페이지" onPress={() => navigation.navigate('Home')} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: screenHeight,
  },
  logo: {
    width: screenWidth * 0.8,
    height: (screenWidth * 0.8) / 2.6,
    marginBottom: 50,
  },
  err: {
    height: 48,
    width: screenWidth * 0.8,
    margin: 12,
    padding: 10,
    paddingStart: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  input: {
    height: 48,
    width: screenWidth * 0.8,
    margin: 12,
    padding: 10,
    paddingStart: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    opacity: animated,
    width: screenWidth * 0.6,
    height: 48,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#7a91ff',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 18,
    color: '#fff',
  },
  errtext: {
    color: 'red',
  },
  disabled: {
    backgroundColor: '#96989d',
  },
});

export default Login;
