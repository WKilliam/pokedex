import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";
import { useSelector } from "react-redux";
import ListPokemons from "../view/ListPokemons";
import PokemonInformations from "../view/PokemonInformations";
import RequireAuth from "./RequireAuth";

const Routes = () => {
  const store = useSelector(state => state.auth);

  useEffect(() => {
  }, [store]);

  return (
    <NavigationContainer>
      {store.auth.isLogged ? <RequireAuth /> : <AppNavigation />}
    </NavigationContainer>
  );
};
export default Routes;
