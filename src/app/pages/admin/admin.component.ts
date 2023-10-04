import { Component } from '@angular/core';

// Servicio
import { DataService } from 'src/app/services/data.service';

// Modelos
import { PrivateUser } from 'src/app/models/PrivateUser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  privateUser: PrivateUser[];
  dataTabla:  string[];
  token='';

  constructor(private dataService: DataService) {

    const userJSON = localStorage.getItem('user');
    const objeto = JSON.parse(userJSON);
    this.token = objeto['auth'].token
    console.log(this.token);

    this.dataService.getPrivateUsers(this.token).subscribe(datos => {
      this.privateUser = datos['data'];
      console.log(this.privateUser);
      
      datos['data'].forEach((elemento:any) => {
        console.log(elemento);

      })

    })

  }


}
