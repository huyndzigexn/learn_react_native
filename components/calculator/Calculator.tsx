import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ImageScreen from './CalculatorScreen';
import {connect} from 'react-redux';
import {
  getDogImageRequestAction,
  getAnotherDogImageRequestAction,
} from '../../redux/actions';

function App(props: any) {
  const dogImage = props.dogImageReducer.dogImage;
  const dogImageAnother = props.dogImageReducer.dogImageAnother;
  const isLoading = props.dogImageReducer.isFetching;

  const handleApi = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    props.getDogImageRequest(payload);
  };
  const genAnotherImage = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    props.getAnotherDogImageRequest(payload);
    console.log(222222222222222);
    console.log(dogImageAnother);
  };
  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        {dogImage ? (
          <Image source={{uri: dogImage}} style={styles.image} />
        ) : (
          <Text>Image here</Text>
        )}
      </View>
    );
  };
  const ClearScreen = () => {
    return (
      <View style={styles.containerx}>
        <Text>1</Text>
        {renderImage()}
        <TouchableOpacity
          disabled={isLoading}
          style={styles.button}
          onPress={handleApi}>
          {isLoading ? (
            <ActivityIndicator size={'small'} color={'gray'} />
          ) : (
            <Text>Show Image</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Image"
          component={ImageScreen}
          options={{
            title: 'Calculator',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={{
                    uri: dogImageAnother,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Clear"
          component={ClearScreen}
          options={{
            title: 'Test',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={{
                    uri: dogImage,
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (reducer: any) => ({
  dogImageReducer: reducer.dogImageReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getDogImageRequest: getDogImageRequestAction(dispatch),
  getAnotherDogImageRequest: getAnotherDogImageRequestAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
