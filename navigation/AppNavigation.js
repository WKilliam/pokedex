import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListPokemons from '../view/ListPokemons';

function AppNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={ListPokemons}
        options={{title: 'Welcome'}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
