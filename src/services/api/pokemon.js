import api from './api';
import pokeApi from './pokeApi';
/**
 * This page contains the user service
 */
export const PokemonService = {
  getPokemons: () => api.get('/pokemon?limit=1118'),

  getPokemonByName: name =>
    api.get(`/pokemon/${name}`).then(data => {
      return data;
    }),

  getPokemonByName: name =>
    api.get(`/pokemon/${name}`).then(data => {
      return data;
    }),

  getPokemonById: id =>
    api.get(`/pokemon/${id}`).then(data => {
      return data;
    }),

  get10RandomPokemon: async () => {
    const ids = [];

    while (ids.length < 10) {
      const randomValue = Math.floor(Math.random() * 500);
      if (!ids.includes(randomValue)) {
        ids.push(randomValue);
      }
    }
    const test = Promise.all(ids.map(id => pokeApi.get('/' + id)));

    return test;
  },
};
