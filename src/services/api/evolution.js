import api from './api';

/**
 * This page contains the evolution service
 */
export const EvolutionService = {
  getEvolutionById: id =>
    api.get(`/evolution-chain/${id}`).then(data => {
      return data;
    }),
};
