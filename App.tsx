import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import SplashScreen from './screens/splash';
import Onboarding from './screens/Onboarding';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import ForgotPasswordScreen from './screens/ForgotPassword';
import BottomTabs from './navigation/BottomTabs';
import ConnectWalletScreen from './screens/ConnectWalletScreen';
import ConnectWalletAccountsScreen from './screens/ConnectWalletAccountsScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
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
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />

        <Stack.Screen
          name="ConnectWallet"
          component={ConnectWalletScreen}
        />
        <Stack.Screen
          name="ConnectWalletAccounts"
          component={ConnectWalletAccountsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>



  );
}

export default App;
