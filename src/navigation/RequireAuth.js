import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../view/Login";

function RequireAuthNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Login}
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
}
export default RequireAuthNavigation;
