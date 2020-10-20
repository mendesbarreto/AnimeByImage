import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { SafeAreaView } from 'react-native';
import App from './App';

export default function AppReactPaperWrapper() {
  return (
    <SafeAreaView>
      <PaperProvider>
        <App />
      </PaperProvider>
    </SafeAreaView>
  );
}
