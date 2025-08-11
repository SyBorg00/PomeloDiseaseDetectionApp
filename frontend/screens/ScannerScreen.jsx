import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'

const ScannerScreen = () => {
    return (
      <View style={styles.container}>
          <Text>Hope there is a camera component here, I need it... or should we just open the camera instead? If so... ignore this one</Text>
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

export default ScannerScreen;
