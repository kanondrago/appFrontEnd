import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { TransaccionComponent } from 'src/app/components/transaccion/transaccion.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private diagloRef: MatDialog) {

  }

  openDialog() {
    this.diagloRef.open(TransaccionComponent);
  }

}
