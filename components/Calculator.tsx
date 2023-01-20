import React from 'react';
// import { StatusBar } from 'expo-status-bar"
// import { StyleSheet, View, SafeAreaView } from 'react-native'
import {StyleSheet, View, Text, Row, TouchableOpacity} from 'react-native';

type CatProps = {
  value: string;
};

const Button = (props: CatProps) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text>{props.value}</Text>
    </TouchableOpacity>
  );
};
const ButtonOrange = (props: CatProps) => {
  return (
    <TouchableOpacity style={styles.btnOrange}>
      <Text>{props.value}</Text>
    </TouchableOpacity>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontNumber}>69,96</Text>
      <View style={styles.row}>
        <Button value="AC" />
        <Button value="+/-" />
        <Button value="%" />
        <ButtonOrange value="/" />
      </View>
      <View style={styles.row}>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <ButtonOrange value="x" />
      </View>
      <View style={styles.row}>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <ButtonOrange value="-" />
      </View>
      <View style={styles.row}>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <ButtonOrange value="+" />
      </View>
      <View style={styles.row}>
        <Button value="0" />
        <Button value="." />
        <ButtonOrange value="=" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  fontNumber: {
    fontSize: 54,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  btnText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },

  btn: {
    backgroundColor: '#b5b5b5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    // borderColor: 'black',
    margin: 0.12,
    borderStyle: 'solid',
    borderWidth: 0.2,
  },
  btnOrange: {
    backgroundColor: '#fc9d17',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    // borderColor: 'black',
    margin: 0.12,
    borderStyle: 'solid',
    borderWidth: 0.2,
  },
});
