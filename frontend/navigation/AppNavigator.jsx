import React from 'react';
import {createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from "../screens/ResultScreen";
import ScannerScreen from "../screens/ScannerScreen";

const Stack = createNativeStackNavigator({
    screens:{
        Home:{
            screen: HomeScreen,
            options: {title: 'Home'}
        },
        Scanner:{
            screen: ScannerScreen,
        },
        Result:{
            screen: ResultScreen,
        }
    }
});

const Navigation = createStaticNavigation(Stack)

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My Home Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}