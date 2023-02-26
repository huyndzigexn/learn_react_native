import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Style';
import Button from './Button';
import {connect} from 'react-redux';
import {
  getDogImageRequestAction,
  getAnotherDogImageRequestAction,
} from '../../redux/actions';

const ImageScreen = (props: any) => {
  // const dogImage = props.dogImageReducer.dogImage;
  // const dogImageAnother = props.dogImageReducer.dogImageAnother;

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
  const handleApi = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    props.getDogImageRequest(payload);
  };
  const genAnotherImage = () => {
    const payload = {behavior: 'BUTTON_PRESS'};
    props.getAnotherDogImageRequest(payload);
  };

  // !!!!!! debug !!!!!!!!!!
  // useEffect(() => {
  //   console.log('useEffect' + dogImage);
  //   console.log('useEffect' + dogImageAnother);
  // }, []);
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
          press={() => genAnotherImage()}
        />
        <Button
          value="%"
          styles={[styles.btn, styles.btnGray]}
          press={() => handleApi()}
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
const mapStateToProps = (reducer: any) => ({
  dogImageReducer: reducer.dogImageReducer,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getDogImageRequest: getDogImageRequestAction(dispatch),
  getAnotherDogImageRequest: getAnotherDogImageRequestAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen);
