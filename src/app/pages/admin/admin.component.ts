import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private dataService: DataService) {

    // this.dataService.getPrivateUsers().subscribe(data => {
    //   console.log(data);
    // })

  }

}
