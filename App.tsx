import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EntryRoute from './src/routes/entryRoute'; 
import style from './src/stylesheet/views/appstyle';

export default function App() {
  return (
    <Provider>
      <SafeAreaProvider style={style.app}>
        <EntryRoute />
      </SafeAreaProvider>
    </Provider>
  );
}

