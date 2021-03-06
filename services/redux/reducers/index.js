import {GET_POKEMONS} from '../actions/index';

const initialState = {
  pokemons: [],
};

function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {...state, pokemons: action.payload};
    default:
      return state;
  }
}

export default pokemonsReducer;
