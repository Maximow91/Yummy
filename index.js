/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import './i18n.config.ts';

AppRegistry.registerComponent(appName, () => App);
