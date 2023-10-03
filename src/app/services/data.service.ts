import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constants
import { PRIVATE_USER } from '../constants/urls';

// Modelos
import { PrivateUser } from '../models/PrivateUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token!: string;

  constructor(private http:HttpClient) {

    // const userJSON = localStorage.getItem('user');
    // const objeto = JSON.parse(userJSON);
    // this.token = objeto['auth'].token
   }

  getPrivateUsers(): Observable<PrivateUser[]> {
    return this.http.get<PrivateUser[]>(PRIVATE_USER);
  }
}
