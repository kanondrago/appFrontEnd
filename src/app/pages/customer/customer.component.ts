import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { TransaccionComponent } from 'src/app/components/transaccion/transaccion.component';
import { DataService } from 'src/app/services/data.service';

// Modelos
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  transacciones: Transaction[];
  totalTransacciones=0;

  constructor(private diagloRef: MatDialog, private dataService: DataService) {

    this.dataService.getUser().subscribe(data => {
      console.log(data);

      this.transacciones = data['data'].transactions;

      console.log(this.transacciones);

      this.totalTransacciones = this.sumarTransacciones();

      console.log(this.totalTransacciones);
    })

  }
  ngOnInit(): void {
    
  }

  openDialog() {
    this.diagloRef.open(TransaccionComponent);
  }

  sumarTransacciones(): number {
    let suma = 0;
    this.transacciones.forEach((valor => {      
      suma = suma + valor.amount;    
    }))
    
    return suma;
  }

}
