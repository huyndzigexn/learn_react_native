import React from 'react';
import {Provider} from 'react-redux';
import MainScreen from './calculator/Calculator';
import configureStore from '../redux/Store';

const rootStore = configureStore();

export default function App() {
  return (
    <Provider store={rootStore}>
      <MainScreen />
    </Provider>
  );
}
