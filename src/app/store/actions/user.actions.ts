import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[User] Load User';
export const LOAD_USER_ERROR = '[User] Error Load User';
export const LOAD_USER_SUCCESS = '[User] Success Load User';

export class LoadUserAction implements Action {
  readonly type = LOAD_USER;
  constructor(public id: string) { }
}

export class ErrorLoadUserAction implements Action {
  readonly type = LOAD_USER_ERROR;
  constructor(public payload: any) { }
}

export class SuccessLoadUserAction implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public user: User) { }
}


export type actionsUser = LoadUserAction | ErrorLoadUserAction | SuccessLoadUserAction;
