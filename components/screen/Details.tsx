// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style';

const DetailsScreen = () => {
  const [image, setImage] = useState<string>('');

  const getData = async () => {
    try {
      const imageUrl = await AsyncStorage.getItem('storageImage');
      setImage(imageUrl);
    } catch (e) {
      console.log(e);
    }
  };
  const clearData = async () => {
    try {
      await AsyncStorage.setItem('storageImage', '');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        key={image}
        style={styles.tinyLogoDetail}
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={clearData}>
        <Text style={styles.loginText}>CLEAR TOKEN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DetailsScreen;
