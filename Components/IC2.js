import React from 'react';
import {StyleSheet, View} from 'react-native';

const uncoveredCode = () => {
  if (true) {
    return 1;
  } else {
    return 2;
  }
};

export default function IC2(props) {
  
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
