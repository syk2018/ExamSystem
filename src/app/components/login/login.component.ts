import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingComponent } from '../loading/loading.component';
import { SnackService } from 'src/app/service/snack.service';
import { Router } from '@angular/router';
import { Students } from 'src/app/interfaces/students';
import { HttpService } from 'src/app/service/http.service';
import { CommonResult } from 'src/app/interfaces/common-result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private snack: SnackService,
    private router: Router,
    private http:HttpService) { }

  ngOnInit() {
  }

  /*user:Students = {
    id:null,
    name:'',
    pwd:'',
    sex:'',
    jointime:null,
    profession:'',
    cardno:null
  }*/

  loginForm = new FormGroup({
    cardno: new FormControl('', [  Validators.required, Validators.minLength(8) ]),
    pwd: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(14) ])
  })

  isDisabled = false;

  onSubmit() {
    this.isDisabled = true;
    
    const dialogRef = this.dialog.open(LoadingComponent);

    console.log(this.http.api.user_login);

    this.http.post(this.http.api.user_login,this.loginForm.value).subscribe((result:CommonResult) => {
      console.log(result);
      dialogRef.close();
    })
    /*setTimeout(() => {
      if(this.loginForm.controls.number.value == 12345678 
        && this.loginForm.controls.password.value == 12345678) {
          dialogRef.close();
          this.router.navigateByUrl('/home');
          this.snack.showSnack('成功！', 2000);
      } else {
        dialogRef.close();
        this.snack.showSnack('密码或学号错误！', 2000);
        this.isDisabled = false;
      }
    }, 900);*/
  }

}
