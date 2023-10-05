import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Servicios
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  transactionForm!:FormGroup;
  token='';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService) {

      const userJSON = localStorage.getItem('user');
      const objeto = JSON.parse(userJSON);
      this.token = objeto['auth'].token

  }
  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      detail: ['', Validators.required],
      amount: ['', Validators.required]
    })

  }

  get fc(){
    return this.transactionForm.controls;
  }

  postTransactionEnvio(){

    this.dataService.postTransaction(this.token,{
      detail: this.fc.detail.value,
      amount: this.fc.amount.value
    }).subscribe(data => {
      location.reload();
    })
  }
  
}
