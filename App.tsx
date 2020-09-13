import React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';

import Routes from './src/components/routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#166494" />
      <Routes />
    </>
  );
}

export default App;
