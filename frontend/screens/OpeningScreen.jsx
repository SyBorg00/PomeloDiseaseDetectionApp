import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const OpeningScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Image source={require('../assets/pomelo logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Pomelo</Text>
      <Text style={styles.text}>Disease Detection</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Scanner')}
        style={styles.button}
      >
        Start Scanning
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  text:{
    fontSize: 14,
    marginBottom: 25
  },
  button: {
    marginVertical: 10,
    backgroundColor: "green",
  },
  note: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default OpeningScreen;
