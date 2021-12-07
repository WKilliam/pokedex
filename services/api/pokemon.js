import api from './api';

/**
 * This page contains the user service
 */
export const PokemonService = {
  getPokemons: () => api.get('/pokemon?limit=1118'),

  getPokemonById: id =>
    api.get(`/pokemon/${id}`).then(data => {
      return data;
    }),
};
