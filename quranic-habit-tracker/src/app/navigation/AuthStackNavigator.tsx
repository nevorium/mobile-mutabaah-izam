import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../features/auth/components/LoginScreen';
import RegisterScreen from '../../features/auth/components/RegisterScreen';
import ProfileSetupScreen from '../../features/auth/components/ProfileSetupScreen';
import ForgotPasswordScreen from '../../features/auth/components/ForgotPasswordScreen';
import AuthLoadingScreen from '../../features/auth/components/AuthLoadingScreen';

const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
