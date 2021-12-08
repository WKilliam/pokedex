/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Cards from './src/components/Cards';
import {View} from 'react-native';
import Login from './src/view/Login';

const App = () => {
  return (
    <>
      {/*<Login></Login>*/}
      <Cards />
      <Cards />
    </>
  );
};

export default App;
