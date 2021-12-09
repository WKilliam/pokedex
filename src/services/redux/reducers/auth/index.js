import {LOGIN} from '../../actions/auth';

const initialState = {
  auth: {isLogged: false},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, auth: action.payload};
    default:
      return state;
  }
}

export default authReducer;
