import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    CustomerComponent,
    PagesComponent
  ],

  exports: [
    AdminComponent,
    CustomerComponent,
    PagesComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    AuthModule,
    SharedModule,
  ]
})
export class PagesModule { }
