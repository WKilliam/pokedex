import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListPokemons from "../view/ListPokemons";
import PokemonInformations from "../view/PokemonInformations";

function AppNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ListPokemons} />
      <Stack.Screen name="Info" component={PokemonInformations} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
