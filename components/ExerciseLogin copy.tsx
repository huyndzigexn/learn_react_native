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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const HomeScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const bootSplashLogo = require('../assets/bootsplash_logo.png');
  const url = 'https://dog.ceo/api/breeds/image/random';
  let text = '';
  const storeData = async value => {
    await AsyncStorage.setItem('@storage_Key', 'value');
    console.log('Value Stored Successfully.');
    test = await axios
      .get(url)
      .then(json => {
        console.log(json.data.message);
        return json.data.message;
      })
      .catch(error => console.log(error));
    await AsyncStorage.setItem('storageImage', test);
    navigation.navigate('Details');
  };
  // useEffect
  // nếu có storageImage > deta

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://assets-ng.rehome-navi.com/lp_assets/regist/images/logo.png',
        }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={storeData}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
const DetailsScreen = ({navigation, route}) => {
  const [image, setImage] = useState<string>('');

  const getData = async () => {
    try {
      const jsonValuexx = await AsyncStorage.getItem('storageImage');
      console.log(jsonValuexx);
      setImage(jsonValuexx);
      return jsonValuexx;
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
      <Text>hi</Text>
      <Image
        key={image}
        style={styles.tinyLogoDetail}
        source={{
          uri: image,
        }}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={clearData}>
        <Text style={styles.loginText}>GET</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  // useEffect
  const [arrayImage, setArrayImage] = useState<string>('');

  useEffect(() => {
    const jsonValuexx = AsyncStorage.getItem('storageImage') ?? null;
    setArrayImage(jsonValuexx);
    console.log(jsonValuexx);
    console.log(arrayImage);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tinyLogo: {
    width: '100%',
    height: 55,
    marginBottom: 50,
  },
  tinyLogoDetail: {
    width: '100%',
    height: '50%',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#dadada',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#553819',
  },
  loginText: {
    color: '#fff',
  },
});
export default App;
