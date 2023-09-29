import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3000/';

  

  constructor(private http: HttpClient) { }

  public login() {
  }

  public logout() {

  }

  // Seteo del LocalStorage
  private setUserLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get del LocalStorage
  private getUserLocalStorage() {
    const userJSON = localStorage.getItem('user');
    if(userJSON) return JSON.parse(userJSON) as User;
    return new User();
  }

}
