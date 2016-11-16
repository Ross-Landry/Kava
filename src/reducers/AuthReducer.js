import {
  UPDATE_LOGIN_ENTRY,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  CREATE_USER_START,
  CREATE_USER_FAIL,
  NAVIGATE_IN_AUTH,
  LOGOUT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: '',
    user: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_ENTRY:
      return { ...state, [action.payload.prop]: action.payload.value,  error: '' }
    case LOGIN_START:
      return { ...state, loading: true}
    case CREATE_USER_START:
      return { ...state, loading: true}
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, email: '', password: '', error: '', loading: false }
    case LOGIN_FAIL:
      return { ...state, error: 'Incorrect Email or Password', email: '', password: '', loading: false }
    case CREATE_USER_FAIL:
      return { ...state, error: 'Registration Failed', email: '', password: '', loading: false }
    case NAVIGATE_IN_AUTH:
      return { ...state, error: '', email: '', password: ''}
    case LOGOUT_SUCCESS:
      return { ...state, user:null }
    default:
      return state;
  }
};
