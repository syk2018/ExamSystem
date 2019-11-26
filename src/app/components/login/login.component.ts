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


  loginForm = new FormGroup({
    cardno: new FormControl('', [  Validators.required, Validators.minLength(8) ]),
    pwd: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(14) ])
  })

  isDisabled = false;
  
  user:Students;

  onSubmit() {
    this.isDisabled = true;
    
    const dialogRef = this.dialog.open(LoadingComponent);

    this.http.post(this.http.api.prefix + this.http.api.user_login,this.loginForm.value).subscribe((result:CommonResult) => {
      console.log(result);
      if(result.code == 404) {
        this.snack.showSnack('密码或学号错误！', 2000);
        this.isDisabled = false;
      } else if(result.code == 200 && result.data!= null) {
        this.router.navigateByUrl('/home');
        this.snack.showSnack('欢迎回来，' + result.data[0].name, 2000);
        this.user = result.data[0];

        localStorage.removeItem('user');
        localStorage.setItem('user',JSON.stringify(this.user));

      } else {
        this.snack.showSnack('发生了未知错误！', 2000);
        this.isDisabled = false;
      }
      dialogRef.close();
    })
    
  }

}
