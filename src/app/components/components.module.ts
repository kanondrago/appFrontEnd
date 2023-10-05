import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    TransaccionComponent,
  ],
  exports: [
    TransaccionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
