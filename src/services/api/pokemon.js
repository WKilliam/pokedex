import api from './api';

/**
 * This page contains the user service
 */
export const PokemonService = {
  getPokemons: () => api.get('/pokemon?limit=1118'),

  getPokemonByName: name =>
    api.get(`/pokemon/${name}`).then(data => {
      return data;
    }),
};
