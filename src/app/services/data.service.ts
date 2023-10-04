import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constants
import { PRIVATE_USER, USER_DATA } from '../constants/urls';

// Modelos
import { User } from '../models/User';
import { PrivateUser } from '../models/PrivateUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token!: string;

  constructor(private http:HttpClient) {

    const userJSON = localStorage.getItem('user');
    const objeto = JSON.parse(userJSON);
    this.token = objeto['auth'].token
   }

  getPrivateUsers(): Observable<PrivateUser[]> {
    const headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get<PrivateUser[]>(PRIVATE_USER, {headers});
  }

  getUser(): Observable<User> {
    const headers = { 'Authorization': 'Bearer '+this.token }
    return this.http.get<User>(USER_DATA, {headers});
  }

}
