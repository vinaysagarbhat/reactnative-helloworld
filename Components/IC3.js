import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const uncoveredCode = () => {
  if (true) {
    return 1;
  } else {
    return 2;
  }
};

export default function IC3() {
  return (
    <View style={styles.container}>
      <Text>Ope</Text>
      <Text>Ope</Text>
      <Text>Ope</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
