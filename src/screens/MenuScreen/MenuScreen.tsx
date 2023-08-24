import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ViewContainer} from '../../components/ViewContainer/ViewContainer';

export const MenuScreen = () => {
  return (
    <ViewContainer
      styles={{flexDirection: 'column', justifyContent: 'space-between'}}>
      <Text>Menu</Text>
      <Text>Menu</Text>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
});
