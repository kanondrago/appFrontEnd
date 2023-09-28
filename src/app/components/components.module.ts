import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionComponent } from './transaccion/transaccion.component';



@NgModule({
  declarations: [
    TransaccionComponent,
  ],
  exports: [
    TransaccionComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
