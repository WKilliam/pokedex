import {LOGIN} from '../../actions/auth';

const initialState = {
  isLogged: false,
  favorites: [],
  user: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.user, isLogged: action.isLogged};
    case 'LOGOUT':
      return {...state, user: {}, isLogged: false};
    case 'FAVORITES':
      return {...state, favorites: action.favorites};
    default:
      return state;
  }
}

export default authReducer;
