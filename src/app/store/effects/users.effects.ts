import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as userActions from '../actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.LOAD_USERS),
    switchMap(() => {
      return this.userService.getUsers()
        .pipe(
          map(users => new userActions.SuccessLoadUsersAction(users)),
          catchError(err => of(new userActions.ErrorLoadUsersAction(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    public userService: UserService
  ) { }
}
