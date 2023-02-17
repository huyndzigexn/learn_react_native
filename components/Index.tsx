// In App.js in a new project

import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AutoTwelfthImage from './AutoTwelfthImage';
import AutoEightImage from './AutoEightImage';
import Calculator from './Calculator';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Calculator"
        color={'black'}
        onPress={() => {
          navigation.navigate('Details', {name: 'calculator'});
        }}
      />
      <Button
        title="Exercise 5.2"
        color={'black'}
        onPress={() => {
          navigation.navigate('Details', {name: '5.2'});
        }}
      />
      <Button
        title="Exercise 5.3"
        color={'black'}
        onPress={() => {
          navigation.navigate('Details', {name: '5.3'});
        }}
      />
    </View>
  );
};

const DetailsScreen = ({navigation, route}) => {
  if (route.params.name === '5.3') {
    return (
      <View style={styles.buttonStyle}>
        <AutoTwelfthImage />
      </View>
    );
  } else if (route.params.name === 'calculator') {
    return (
      <View style={styles.buttonStyle}>
        <Calculator />
      </View>
    );
  } else if (route.params.name === '5.2') {
    return (
      <View style={styles.buttonStyle}>
        <AutoEightImage />
      </View>
    );
  }
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontSize: 40,
  },
  container: {
    flex: 1,
    // flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
  },
});
export default App;
