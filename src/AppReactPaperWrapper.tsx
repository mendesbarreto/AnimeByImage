import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import App from './App';

export default function AppReactPaperWrapper() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
