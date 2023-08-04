/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AppNavigator} from './navigation/AppNavigator';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
