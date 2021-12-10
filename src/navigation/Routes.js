import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import {useSelector} from 'react-redux';
import RequireAuth from './RequireAuth';

const Routes = () => {
  const {auth} = useSelector(state => state.auth);

  useEffect(() => {}, [auth]);
  console.log(auth.isLogged, 'iciiiiiiiiiiiiiiii');
  return (
    <NavigationContainer>
      {auth.isLogged ? <AppNavigation /> : <RequireAuth />}
    </NavigationContainer>
  );
};
export default Routes;
