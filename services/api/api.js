import axios from 'axios';
import {API_HOST} from '@env';

/**
 * This page contains all the types of request and response
 *
 */
const BASE_URL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },

  withCredentials: true,
});

const responseBody = response => response.data;

const responseError = err => {
  if (axios.isAxiosError(err)) {
    throw err.response?.data.message || err.response?.data.error;
  } else {
    throw err.message;
  }
};

const requests = {
  get: url => instance.get(url).then(responseBody).catch(responseError),
  post: (url, body) =>
    instance.post(url, body).then(responseBody).catch(responseError),
};

export default requests;
