import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../config/config';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${URL_API}users?page=2`)
      .pipe(
        map(resp => resp['data']));
  }
}
