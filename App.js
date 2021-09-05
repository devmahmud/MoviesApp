import React from 'react';
import {View} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Home />
    </View>
  );
};

export default App;
