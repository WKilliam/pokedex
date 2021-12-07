import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RequireAuth from './RequireAuth';
import AppNavigation from './AppNavigation';

const auth = true;

const Routes = () => {
  return (
    <NavigationContainer>
      {auth ? <AppNavigation /> : <RequireAuth />}
    </NavigationContainer>
  );
};
export default Routes;
