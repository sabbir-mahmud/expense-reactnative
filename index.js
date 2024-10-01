/**
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {setToken} from './src/lib/data/auth/userSlice';
import {store} from './src/lib/store';

const ReduxApp = () => {
  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          console.log('Token loaded:', token);
          store.dispatch(setToken(token));
        }
      } catch (error) {
        console.error('Failed to load token:', error);
      }
    };

    loadToken();
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxApp);
