import {
  UPDATE_LOGIN_ENTRY,
  LOGIN_SUCCESS,
  LOGIN_START,
  CREATE_USER_START,
  AUTH_FAIL,
  NAVIGATE_IN_AUTH,
  LOGOUT_SUCCESS,
  UPDATE_ERROR_MESSAGE,
  FETCH_NAME
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    confirmPassword:'',
    error: '',
    user: null,
    loading: false,
    firstName: '',
    lastName: '',
    firstNameEntry: '',
    lastNameEntry: ''
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
      return { 
          ...state, 
          user: action.payload, 
          firstName: action.payload.name.first, 
          lastName: action.payload.name.last,
          email: '', 
          password: '',
          firstNameEntry: '',
          lastNameEntry: '', 
          error: '', 
          confirmPassword: '', 
          loading: false }
    case AUTH_FAIL:
      return { ...state, error: action.payload, password: '', confirmPassword: '', loading: false }
    case NAVIGATE_IN_AUTH:
      return { ...state, error: '', email: '', password: '', confirmPassword: '' }
    case LOGOUT_SUCCESS:
      return { ...state, user:null }
    case UPDATE_ERROR_MESSAGE:
      return { ... state, error: action.payload }
    case FETCH_NAME:
      return { ... state, firstName: action.payload.name.first, lastName: action.payload.name.last }
    default:
      return state;
  }
};
