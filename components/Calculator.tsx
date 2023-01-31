import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type CatProps = {
  value: string;
  styles: any;
};
const Button = (props: CatProps) => {
  return (
    <TouchableOpacity style={[props.styles]}>
      <Text style={styles.btnText}>{props.value}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fontNumber}>69.69696</Text>
      <View style={styles.row}>
        <Button value="AC" styles={styles.btn} />
        <Button value="+/-" styles={styles.btn} />
        <Button value="%" styles={styles.btn} />
        <Button value="/" styles={[styles.btn, styles.btnOrange]} />
      </View>
      <View style={styles.row}>
        <Button value="7" styles={styles.btn} />
        <Button value="8" styles={styles.btn} />
        <Button value="9" styles={styles.btn} />
        <Button value="x" styles={[styles.btn, styles.btnOrange]} />
      </View>
      <View style={styles.row}>
        <Button value="4" styles={styles.btn} />
        <Button value="5" styles={styles.btn} />
        <Button value="6" styles={styles.btn} />
        <Button value="-" styles={[styles.btn, styles.btnOrange]} />
      </View>
      <View style={styles.row}>
        <Button value="1" styles={styles.btn} />
        <Button value="2" styles={styles.btn} />
        <Button value="3" styles={styles.btn} />
        <Button value="+" styles={[styles.btn, styles.btnOrange]} />
      </View>
      <View style={styles.row}>
        <Button value="0" styles={[styles.btn, styles.btnZero]} />
        <Button value="." styles={styles.btn} />
        <Button value="=" styles={[styles.btn, styles.btnOrange]} />
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
    flex: 0,
    width: '50%',
  },
  btnOrange: {
    backgroundColor: '#fc9d17',
  },
});
