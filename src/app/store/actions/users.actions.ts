import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_ERROR = '[Users] Error Load Users';
export const LOAD_USERS_SUCCESS = '[Users] Success Load Users';

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;
}

export class ErrorLoadUsersAction implements Action {
  readonly type = LOAD_USERS_ERROR;
  constructor(public payload: any) { }
}

export class SuccessLoadUsersAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public users: User[]) { }
}


export type actions = LoadUsersAction | ErrorLoadUsersAction | SuccessLoadUsersAction;
