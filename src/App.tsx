/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider, theme, VStack} from 'native-base';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './navigation/AppNavigation';
import {persistor, store} from './store';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <VStack flex="1" bg="white">
            <AppNavigation />
          </VStack>
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
