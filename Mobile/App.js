import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exercise from './navigation/Exercise';
import Home from './navigation/Home';
import Login from './navigation/Login';
import * as React from 'react';
import Calendar from './navigation/Calendar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Exercise"
          component={Exercise}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
