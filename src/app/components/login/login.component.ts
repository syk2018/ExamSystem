import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LoadingComponent } from '../loading/loading.component';
import { SnackService } from 'src/app/service/snack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private snack: SnackService,
    private router: Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    number: new FormControl('', [  Validators.required, Validators.minLength(8) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(14) ])
  })

  isDisabled = false;

  onSubmit() {
    this.isDisabled = true;
    console.warn(this.loginForm.value);
    const dialogRef = this.dialog.open(LoadingComponent);
    setTimeout(() => {
      console.log('ok');
      if(this.loginForm.controls.number.value == 12345678 
        && this.loginForm.controls.password.value == 12345678) {
          dialogRef.close();
          this.router.navigateByUrl('/home');
          this.snack.showSnack('成功！', 2000);
      } else {
        dialogRef.close();
        this.snack.showSnack('密码或学号错误！', 2000);
      }
    }, 900);
  }

}
