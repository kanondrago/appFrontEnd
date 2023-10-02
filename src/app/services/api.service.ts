import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { User } from '../models/User';
import { UserLogin } from '../interfaces/UserLogin';
import { USER_LOGIN_URL } from 'src/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3000/';

  private userSubject = new BehaviorSubject<User>(this.getUserLocalStorage());
  public userObservable:Observable<User>;

  // private toastrService: ToastrService
  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private router: Router) 
  { 
    // Obtener en información para el Header
    this.userObservable = this.userSubject.asObservable();
  }

  public login(userLogin: UserLogin): Observable<User> {
    // Here pipe dont break the flow of the return and just with tap we can show 
    //  a message for the logged user
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Bienvenidos a 3DDIGITALVENUE ${user.username}`,
            'Logeo exitoso'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Logeo Fallido - vuelva a intentarlo');
        }
      })
    ) 
  } 

  public logout() {
    this.userSubject.next(new User());
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
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
