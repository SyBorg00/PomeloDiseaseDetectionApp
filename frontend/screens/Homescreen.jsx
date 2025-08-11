import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'

const Homescreen = () => {
    return (
      <View style={styles.container}>
          <Text>Logo should be here</Text>
          <Button mode="contained">Start Scanning</Button>
          <Text>Note: Trying to configure the routing process as of the moment to redirect to each page</Text>
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
export default Homescreen;
