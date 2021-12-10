export const LOGIN = 'LOGIN';

const AuthReducerFunction = {
  login: user => {
    return async dispatch => {
      dispatch({
        type: LOGIN,
        payload: {user, isLogged: true},
      });
    };
  },

  logout: () => {
    return async dispatch => {
      dispatch({
        type: LOGIN,
        isLogged: false,
      });
    };
  },
};

export default AuthReducerFunction;
