import React from 'react';
import { View, StatusBar, LogBox } from 'react-native';
import Header from './src/components/Header/Header';
import Home from './src/screens/Home/Home';
import Footer from './src/components/Footer/Footer';
import { globalStyles } from './src/styles/globalStyles';

// Ignorar logs molestos de versiones
LogBox.ignoreLogs([
  'Incompatible React versions',
  'Cannot read property',
  'ExceptionsManager',
  'react-native-renderer'
]);

const App = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="#1f2937" barStyle="light-content" />
      <Header />
      <Home />
      <Footer />
    </View>
  );
};

export default App;