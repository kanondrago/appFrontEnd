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
    private diagloRef: MatDialog,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService) {

      const userJSON = localStorage.getItem('user');
      const objeto = JSON.parse(userJSON);
      this.token = objeto['auth'].token
      console.log(this.token);

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
    console.log('post');

    console.log(this.fc.detail.value);
    console.log(this.fc.amount.value);

    this.dataService.postTransaction(this.token,{
      detail: this.fc.detail.value,
      amount: this.fc.amount.value
    }).subscribe(data => {
      console.log(data);
      location.reload();
    })
    // location.reload();
    // this.router.navigateByUrl('/admin/customer');
  }
  
}
