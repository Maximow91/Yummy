import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthScreen} from '../../screens/AuthScreen/AuthScreen';
import {MenuScreen} from '../../screens/MenuScreen/MenuScreen';
import {OnboardingScreen} from '../../screens/OnboardingScreen/OnboardingScreen';
import {ProductsScreen} from '../../screens/ProductsScreen/ProductsScreen';
import {DrawerNavigator} from '../Drawer/Drawer';

export type MainStackParamList = {
  Main: undefined;
  Products: undefined;
  Drawer: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Main" component={MenuScreen} />
      <MainStack.Screen name="Products" component={ProductsScreen} />
    </MainStack.Navigator>
  );
};
