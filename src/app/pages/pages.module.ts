import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modulos
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// Componentes
import { PagesComponent } from './pages.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';

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
    ComponentsModule,
  ]
})
export class PagesModule { }
