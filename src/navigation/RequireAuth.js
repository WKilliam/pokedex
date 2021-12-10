import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../view/Login';
import Register from '../view/Register';

function RequireAuthNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
}
export default RequireAuthNavigation;
