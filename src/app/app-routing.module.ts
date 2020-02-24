import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';


const routes: Routes = [
  { path: 'user/:id', component: UserComponent },
  { path: 'home', component: ListComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
