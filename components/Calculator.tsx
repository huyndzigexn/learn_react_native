import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './calculator/Button';

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  fontNumber: {
    fontSize: 60,
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
  btnGray: {
    backgroundColor: 'gray',
  },
});
