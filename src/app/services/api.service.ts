import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { User } from '../models/User';
import { UserLogin } from '../interfaces/UserLogin';


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
    return this.http.post<User>('http://localhost:3000/login', userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Bienvenidos a Vacamarca ${user.username}`,
            'Logeo exitoso'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Logeo Fallido');
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
