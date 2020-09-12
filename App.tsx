import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './src/pages/Home';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="home"
          component={Home}
          title="Home"
          initial={true}
          hideNavBar={true}
        />
      </Stack>
    </Router >
  );
}

export default App;
