import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { CommonResult } from 'src/app/interfaces/common-result';
import { MatBottomSheet } from '@angular/material';
import { ButtomSheetComponent } from 'src/app/components/buttom-sheet/buttom-sheet.component';
import { Students } from 'src/app/interfaces/students';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService,
    private router: Router,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
   this.user = JSON.parse(localStorage.getItem("user"));
  }

  opened = false;

  user:Students;

  exit() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
  
  openBottomSheet() {
    this.bottomSheet.open(ButtomSheetComponent);
  }
   
}
