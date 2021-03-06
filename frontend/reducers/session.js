import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';
import merge from 'lodash/merge';

const _nullSession = {
  currentUser: {
    display_name: '',
    email: '',
    description: '',
    main: '',
    game: '',
    pronouns: '',
    age: '',
    id: ''
  }
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;