import {PokemonService} from '../../api/pokemon';
import {Platform} from "react-native";
import {listPokemonJson} from "../../../utils/listPokemonJson";
export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => {
  try {
    return async dispatch => {
      const response = Platform.OS === 'ios' ? await PokemonService.getPokemons() : listPokemonJson;
      if (response) {
        dispatch({
          type: GET_POKEMONS,
          payload: response,
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
