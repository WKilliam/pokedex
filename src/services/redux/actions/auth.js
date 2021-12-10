export const LOGIN = 'LOGIN';

const AuthReducerFunction = {
  login: user => {
    return async dispatch => {
      dispatch({
        type: LOGIN,
        user: user,
        isLogged: true,
      });
    };
  },

  logout: () => {
    return async dispatch => {
      dispatch({
        type: 'LOGOUT',
        user: {},
        isLogged: false,
      });
    };
  },

  toggleFavorites: arrayPokemons => {
    return async dispatch => {
      dispatch({
        type: 'FAVORITES',
        favorites: arrayPokemons,
      });
    };
  },
};

export default AuthReducerFunction;
