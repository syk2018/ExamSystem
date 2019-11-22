import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { CommonResult } from 'src/app/interfaces/common-result';
import { MatBottomSheet } from '@angular/material';
import { ButtomSheetComponent } from 'src/app/components/buttom-sheet/buttom-sheet.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpService,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
   
  }

  openBottomSheet() {
    this.bottomSheet.open(ButtomSheetComponent);
  }
   
}
