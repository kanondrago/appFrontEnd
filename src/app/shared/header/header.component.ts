import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  today = new Date();
  nombreUsuario!: string;

  constructor(private apiService:ApiService) {
    this.apiService.userObservable.subscribe(data => {

    try {
      this.nombreUsuario = data['user'].username;
      this.nombreUsuario = this.capitalizarPrimeraLetra(this.nombreUsuario);
      
    } catch (error) {
      console.log(error);
    }

    })
  }

  formatoFecha() {
    return formatDate(this.today, 'dd-MM-yyyy', 'en-US')
  }

  capitalizarPrimeraLetra(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  logout() {
    this.apiService.logout();
  }



}
