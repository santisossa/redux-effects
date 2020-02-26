import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/store/app.reducers';
import { LoadUserAction } from '../../store/actions/user.actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  loading: boolean;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<Appstate>
  ) { }

  ngOnInit() {

    this.store.select('user')
      .subscribe(respUsers => {
        this.user = respUsers.user;
        this.loading = respUsers.loading;
        this.error = respUsers.error;
      });

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new LoadUserAction(id));
    });
  }

}
