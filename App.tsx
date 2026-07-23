import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View,Text} from 'react-native';
import SplashScreen from './screens/splash';
import Onboarding from './screens/Onboarding';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>



  );
}

export default App;
