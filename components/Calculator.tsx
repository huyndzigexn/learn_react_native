import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type CatProps = {
  value: string;
};

const Button = (props: CatProps) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{props.value}</Text>
    </TouchableOpacity>
  );
};
const ButtonOrange = (props: CatProps) => {
  return (
    <TouchableOpacity style={styles.btnOrange}>
      <Text style={styles.btnText}>{props.value}</Text>
    </TouchableOpacity>
  );
};
const ButtonZero = (props: CatProps) => {
  return (
    <TouchableOpacity style={styles.btnZero}>
      <Text style={styles.btnText}>{props.value}</Text>
    </TouchableOpacity>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontNumber}>69.69696</Text>
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
        <ButtonZero value="0" />
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
    fontSize: 80,
    color: '#fff',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
  },
  btnText: {
    color: '#f2f0e9',
    fontSize: 40,
    fontWeight: '300',
  },

  btn: {
    backgroundColor: '#b5b5b5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderBottomWidth: 0,
  },
  btnZero: {
    backgroundColor: '#b5b5b5',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.2,
    width: '50%',
    borderBottomWidth: 0,
  },
  btnOrange: {
    backgroundColor: '#fc9d17',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.2,
    borderBottomWidth: 0,
  },
});
