import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Homescreen from "./screens/Homescreen";

export default function App() {
  const [message, setMessage] = React.useState('');

  useEffect(() => {
  axios.get('http://10.0.2.2:5000/')
    .then(response => {
      console.log('Response from Flask:', response.data);
      setMessage(response.data.message); // access the message string
    })
    .catch(error => {
      console.error('Error fetching from backend:', error);
    });
}, []);

  // return (
  //   <View style={styles.container}>
  //     <Text>{message}</Text>
  //   </View>
  // );
  return(<Homescreen/>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});