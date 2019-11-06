/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

var sha1 = require('sha1')
global.sha1 = sha1

AppRegistry.registerComponent(appName, () => App);
