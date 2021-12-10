import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListPokemons from '../view/ListPokemons';
import PokemonInformations from '../view/PokemonInformations';
import {AuthService} from '../services/api/auth';
import WhoThatPokemon from '../view/WhoThatPokemon';
import {Button, View} from "react-native";

function AppNavigation() {
  const Stack = createNativeStackNavigator();
  const useAuthService = AuthService();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={ListPokemons}
        options={{
          headerTitle: props => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="black"
            />
          ),

          headerRight: () => (
            <View>
              <Button
                onPress={() => useAuthService.localLogout()}
                title="Logout"
              />
            </View>
          ),
        }}
      />
      <Stack.Screen name="Info" component={PokemonInformations} />
      <Stack.Screen name="Game" component={WhoThatPokemon} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
