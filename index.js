import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Config from 'react-native-config';
import {MMKV} from 'react-native-mmkv';

process.env = Config;

export const storage = new MMKV();

AppRegistry.registerComponent(appName, () => App);
