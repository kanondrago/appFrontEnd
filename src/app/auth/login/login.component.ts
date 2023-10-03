import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  isSubmitted = false;
  returnUrl = '';
  usuario: User;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    // apiService.userObservable.subscribe((newUser) => {
    //   this.usuario = newUser;
    //   console.log('hola');
    //   console.log(this.usuario);
    // })
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      password: ['', Validators.required]
    });

    // Verificamos la ultima version de activatedRoute
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;

  }

  get fc(){
    return this.loginForm.controls;
  }
  /////////// Getter property ends ///////////

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    // alert(`username: ${this.fc.username.value}, password: ${this.fc.password.value}`);

    this.apiService.login(
      {
        username: this.fc.username.value, 
        password: this.fc.password.value
      }).subscribe(data => {
        // this.router.navigateByUrl(this.returnUrl);
        // console.log(data);
        // console.log(data['user'].role.type);

        if(data['user'].role.type === 'admin'){
          this.router.navigateByUrl('/admin');
        }
        else {
          this.router.navigateByUrl('/admin/customer');
        }
      });

  }
}
