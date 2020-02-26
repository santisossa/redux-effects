import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as userActions from '../actions';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {

  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.LOAD_USER),
    switchMap(action => {
      const id = action['id'];
      return this.userService.getUserByID(id)
        .pipe(
          map(user => new userActions.SuccessLoadUserAction(user)),
          catchError(err => of(new userActions.ErrorLoadUserAction(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    public userService: UserService
  ) { }
}
