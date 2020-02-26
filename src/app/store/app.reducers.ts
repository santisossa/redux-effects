import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface Appstate {
  users: reducers.UsersState;
  user: reducers.UserState
}

export const appReducers: ActionReducerMap<Appstate> = {
  users: reducers.usersReducer,
  user: reducers.userReducer
}
