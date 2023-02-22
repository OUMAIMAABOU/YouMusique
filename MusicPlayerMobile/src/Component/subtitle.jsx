import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Subtitle() {
  return (
    <View style={styles.container}>
      <Text>subtitle</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#171717',
    alignItems: 'center',
    opacity: 0.9,
  },
});
