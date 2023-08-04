import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthScreen} from '../../screens/AuthScreen/AuthScreen';
import {OnboardingScreen} from '../../screens/OnboardingScreen/OnboardingScreen';

export type AuthStackParamList = {
  Onboarding: undefined;
  AuthScreen: undefined;
};

export type NotificationsStackParamList = {
  Notifications: undefined;
  SingleNotificationScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="AuthScreen" component={AuthScreen} />
    </AuthStack.Navigator>
  );
};
