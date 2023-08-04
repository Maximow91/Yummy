import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
});
