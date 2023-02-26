import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Button from './calculator/Button';
import styles from './calculator/Style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const [currVal, setCurrVal] = useState('0');
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState('');

  const tapScreen = (type: string, value: any) => {
    if (type === 'number') {
      // DEBUG
      // console.log('currVal: ' + currVal);
      // console.log('value: ' + value);
      // console.log(`${currVal}${value}`);

      currVal == '0'
        ? setCurrVal(`${value}`)
        : setCurrVal(`${currVal}${value}`);
    }

    if (type === 'operator') {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal('');
    }

    if (type === 'clear') {
      setCurrVal('0');
      setOperator(null);
      setPrevVal(null);
    }

    if (type === 'posneg') {
      setCurrVal(`${parseFloat(currVal) * -1}`);
    }

    if (type === 'percent') {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
    }

    if (type === 'equal') {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === '+') {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === '/') {
        setCurrVal(previous / current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === '-') {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
      }

      if (operator === '*') {
        setCurrVal(previous * current);
        setOperator(null);
        setPrevVal(null);
      }
    }
  };
  const ClearScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.fontNumber}>{currVal}</Text>
        <View style={styles.row}>
          <Button
            value="AC"
            styles={[styles.btn, styles.btnGray]}
            press={() => tapScreen('clear', '')}
          />
          <Button
            value="+/-"
            styles={[styles.btn, styles.btnGray]}
            press={() => tapScreen('posneg', '/')}
          />
          <Button
            value="%"
            styles={[styles.btn, styles.btnGray]}
            press={() => tapScreen('percent', '')}
          />
          <Button
            value="/"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '/')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="7"
            styles={styles.btn}
            press={() => tapScreen('number', 7)}
          />
          <Button
            value="8"
            styles={styles.btn}
            press={() => tapScreen('number', 8)}
          />
          <Button
            value="9"
            styles={styles.btn}
            press={() => tapScreen('number', 9)}
          />
          <Button
            value="x"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '*')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="4"
            styles={styles.btn}
            press={() => tapScreen('number', 4)}
          />
          <Button
            value="5"
            styles={styles.btn}
            press={() => tapScreen('number', 5)}
          />
          <Button
            value="6"
            styles={styles.btn}
            press={() => tapScreen('number', 6)}
          />
          <Button
            value="-"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '-')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="1"
            styles={styles.btn}
            press={() => tapScreen('number', 1)}
          />
          <Button
            value="2"
            styles={styles.btn}
            press={() => tapScreen('number', 2)}
          />
          <Button
            value="3"
            styles={styles.btn}
            press={() => tapScreen('number', 3)}
          />
          <Button
            value="+"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '+')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="0"
            styles={[styles.btn, styles.btnZero]}
            press={() => tapScreen('number', 0)}
          />
          <Button
            value="."
            styles={styles.btn}
            press={() => tapScreen('number', '.')}
          />
          <Button
            value="="
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('equal', '')}
          />
        </View>
      </View>
    );
  };
  const ImageScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.fontNumber}>{currVal}</Text>
        <View style={styles.row}>
          <Button
            value="AC"
            styles={[styles.btn, styles.btnGray]}
            press={() => tapScreen('clear', '')}
          />
          <Button
            value="+/-"
            styles={[styles.btn, styles.btnGray]}
            press={() => tapScreen('posneg', '/')}
          />
          <Button
            value="%"
            styles={[styles.btn, styles.btnGray]}
            press={() => tapScreen('percent', '')}
          />
          <Button
            value="/"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '/')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="7"
            styles={styles.btn}
            press={() => tapScreen('number', 7)}
          />
          <Button
            value="8"
            styles={styles.btn}
            press={() => tapScreen('number', 8)}
          />
          <Button
            value="9"
            styles={styles.btn}
            press={() => tapScreen('number', 9)}
          />
          <Button
            value="x"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '*')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="4"
            styles={styles.btn}
            press={() => tapScreen('number', 4)}
          />
          <Button
            value="5"
            styles={styles.btn}
            press={() => tapScreen('number', 5)}
          />
          <Button
            value="6"
            styles={styles.btn}
            press={() => tapScreen('number', 6)}
          />
          <Button
            value="-"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '-')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="1"
            styles={styles.btn}
            press={() => tapScreen('number', 1)}
          />
          <Button
            value="2"
            styles={styles.btn}
            press={() => tapScreen('number', 2)}
          />
          <Button
            value="3"
            styles={styles.btn}
            press={() => tapScreen('number', 3)}
          />
          <Button
            value="+"
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('operator', '+')}
          />
        </View>
        <View style={styles.row}>
          <Button
            value="0"
            styles={[styles.btn, styles.btnZero]}
            press={() => tapScreen('number', 0)}
          />
          <Button
            value="."
            styles={styles.btn}
            press={() => tapScreen('number', '.')}
          />
          <Button
            value="="
            styles={[styles.btn, styles.btnOrange]}
            press={() => tapScreen('equal', '')}
          />
        </View>
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
            title: 'My calculator',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={{
                    uri: 'https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/326566131_1375964699830409_7950628638793365836_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=Q6FbrL_J2fMAX_NiT8b&_nc_oc=AQkw86lkqczeHMAIWv101SvyNm9cGcl6n-vjg6g4gOcM-Q25197git4N-mNfC_ImPTU&tn=E7YR7k3QwgBhOACH&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfC2VsUglM3xJDZqdg5k0QjcanaMhtGtWisQGqjTWTUmDg&oe=63FFA85A',
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
            title: 'My profile',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Image
                  style={{width: size, height: size}}
                  source={{
                    uri: 'https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-1/326566131_1375964699830409_7950628638793365836_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=Q6FbrL_J2fMAX_NiT8b&_nc_oc=AQkw86lkqczeHMAIWv101SvyNm9cGcl6n-vjg6g4gOcM-Q25197git4N-mNfC_ImPTU&tn=E7YR7k3QwgBhOACH&_nc_ht=scontent.fsgn6-1.fna&oh=00_AfC2VsUglM3xJDZqdg5k0QjcanaMhtGtWisQGqjTWTUmDg&oe=63FFA85A',
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
