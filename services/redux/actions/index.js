import {PokemonService} from '../../api/pokemon';
export const GET_POKEMONS = 'GET_POKEMONS';

export const getPokemons = () => {
  try {
    return async dispatch => {
      const response = await PokemonService.getPokemons();
      if (response.results) {
        dispatch({
          type: GET_POKEMONS,
          payload: response.data,
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};
