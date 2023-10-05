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
  token='';
  nombreUsuario:string;
  tipoUsuario:string;
  detalleUsuario:string;

  constructor(private diagloRef: MatDialog, private dataService: DataService) {

    const userJSON = localStorage.getItem('user');
    const objeto = JSON.parse(userJSON);
    this.token = objeto['auth'].token


    this.dataService.getUser(this.token).subscribe(data => {
      this.transacciones = data['data'].transactions;
      this.totalTransacciones = this.sumarTransacciones();

      this.nombreUsuario = data['data'].username;
      this.tipoUsuario = data['data'].role.type;
      this.detalleUsuario = data['data'].role.name;


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
