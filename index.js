/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Hello from './components/Hello';
import State from './components/State';
import Calculator from './components/Calculator';
import AutoEightImage from './components/AutoEightImage';
import AutoTwelfthImage from './components/AutoTwelfthImage';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Hello);
// AppRegistry.registerComponent(appName, () => State);
// AppRegistry.registerComponent(appName, () => Calculator);
// AppRegistry.registerComponent(appName, () => AutoEightImage);
AppRegistry.registerComponent(appName, () => AutoTwelfthImage);
