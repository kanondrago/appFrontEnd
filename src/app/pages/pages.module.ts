import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    AdminComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
