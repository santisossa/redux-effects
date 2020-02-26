import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/store/app.reducers';
import * as userActions from '../../store/actions';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  loading: boolean;
  error: any;

  constructor(
    private store: Store<Appstate>
  ) { }

  ngOnInit() {
    this.store.select('users')
      .subscribe(respUsers => {
        this.users = respUsers.users;
        this.loading = respUsers.loading;
        this.error = respUsers.error;
      });

    this.store.dispatch(new userActions.LoadUsersAction());
  }

}
