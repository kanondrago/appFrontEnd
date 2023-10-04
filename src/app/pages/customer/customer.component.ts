import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { TransaccionComponent } from 'src/app/components/transaccion/transaccion.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private diagloRef: MatDialog, private dataService: DataService) {

    this.dataService.getUser().subscribe(data => {
      console.log(data);
    })

  }

  openDialog() {
    this.diagloRef.open(TransaccionComponent);
  }

}
