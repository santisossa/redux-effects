import * as userActions from '../actions/user.actions';
import { User } from '../../models/user.model';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};


export function userReducer(state = initialState, action: userActions.actionsUser): UserState {
  switch (action.type) {
    case userActions.LOAD_USER:
      return {
        ...state,
        loading: true,
        error: null
      };

    case userActions.LOAD_USER_ERROR:
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

    case userActions.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: { ...action.user }
      };

    default:
      return state;
  }
}
