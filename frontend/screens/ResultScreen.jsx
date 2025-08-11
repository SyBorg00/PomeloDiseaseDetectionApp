import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'

const ResultScreen = () => {
    return (
      <View style={styles.container}>
          <Text>Result Title</Text>
          <Text>Image of the scanned pomelo</Text>
          <Text>Description</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});

export default ResultScreen;
