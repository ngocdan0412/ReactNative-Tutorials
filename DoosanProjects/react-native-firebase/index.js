/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import AddDataScreen from './src/CloudFilestore/AddDataScreen';
import ReadDataScreen from './src/CloudFilestore/ReadDataScreen';
import TodosScreen from './src/CloudFilestore/TodosScreen';
import ChatScreen from './src/Realtime/ChatScreen';
import Notification from './src/Notification';
import LoginScreen from './src/Authentication/LoginScreen';
import UploadFile from './src/Storage/UploadFile';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => UploadFile);
