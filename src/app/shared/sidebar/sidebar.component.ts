import { Component, OnInit } from '@angular/core';

// Servicios
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  token='';
  tipoUsuario:string;
  isAuthAdmin=false;
  isAuthCustomer=false;

  constructor(private dataService: DataService) {
    const userJSON = localStorage.getItem('user');
    const objeto = JSON.parse(userJSON);
    this.token = objeto['auth'].token

    this.dataService.getUser(this.token).subscribe(data => {

      this.tipoUsuario = data['data'].role.type
      if(this.tipoUsuario==='admin'){
        this.isAuthAdmin=true;
      }
      if(this.tipoUsuario==='customer'){
        this.isAuthCustomer=true;
      }
    })
  }




}
