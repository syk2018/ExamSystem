import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SnackService } from 'src/app/service/snack.service';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';
import { CommonResult } from 'src/app/interfaces/common-result';
import { Students } from 'src/app/interfaces/students';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private snack: SnackService,
    private router: Router,
    private http:HttpService,
    ) { }

  ngOnInit() {
  }

  signUpForm = new FormGroup({
    name:new FormControl('',[  Validators.required, ]),
    pwd:new FormControl('',[ Validators.required, Validators.minLength(6), Validators.maxLength(14) ]),
    cardno: new FormControl('', [  Validators.required, Validators.minLength(8) ]),
    repwd:new FormControl('',[ Validators.required, Validators.minLength(6), Validators.maxLength(14) ]),
    profession:new FormControl('',[  Validators.required, ])
  });

  isDisabled = false;
  
  user:Students;
  
  onSubmit() {
    this.isDisabled = true;

    const dialogRef = this.dialog.open(LoadingComponent);

    if(this.signUpForm.controls.pwd.value != this.signUpForm.controls.repwd.value) {
      this.snack.showSnack('两次密码不相符！', 2000);
      this.isDisabled = false;
      
      dialogRef.close();
    } else {

    this.http.post(this.http.api.prefix + this.http.api.user_signUp,this.signUpForm.value).subscribe((result:CommonResult) => {
      
      if(result.code == 8401) {
        this.snack.showSnack('学号已被注册！', 2000);
        this.isDisabled = false;
      } else if(result.code == 200 && result.data!= null) {
        this.router.navigateByUrl('/home');
        this.snack.showSnack('欢迎，' + result.data[0].name, 2000);

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
}
