import * as usersActions from '../actions';
import { User } from '../../models/user.model';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};


export function usersReducer(state = initialState, action: usersActions.actions): UsersState {
  switch (action.type) {
    case usersActions.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case usersActions.LOAD_USERS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    case usersActions.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      };

    default:
      return state;
  }
}
