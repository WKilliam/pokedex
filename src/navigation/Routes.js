import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RequireAuth from './RequireAuth';
import AppNavigation from './AppNavigation';
import {useSelector} from 'react-redux';

const Routes = () => {
  const store = useSelector(state => state.auth);

  useEffect(() => {}, [store]);

  return (
    <NavigationContainer>
      {!store.auth.isLogged ? <RequireAuth /> : <AppNavigation />}
    </NavigationContainer>
  );
};
export default Routes;
