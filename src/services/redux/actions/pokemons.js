import {PokemonService} from '../../api/pokemon';
export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => {
  try {
    return async dispatch => {
      const response = await PokemonService.getPokemons();
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
