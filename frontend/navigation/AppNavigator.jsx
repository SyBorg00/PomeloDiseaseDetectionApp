import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ResultScreen from '../screens/ResultScreen';
import ScannerScreen from '../screens/ScannerScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{ title: 'Scanner' }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: 'Result' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
