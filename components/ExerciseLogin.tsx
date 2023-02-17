// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';
// import RNBootSplash from 'react-native-bootsplash';
import SignIn from './screen/SignIn';
import DetailsScreen from './screen/Details';
import Loading from './screen/Loading';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={SignIn} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
