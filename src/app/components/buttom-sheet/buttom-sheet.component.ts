import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ExamItem } from 'src/app/interfaces/exam-item';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

import { CommonResult } from 'src/app/interfaces/common-result';
import { Type } from 'src/app/interfaces/type';

@Component({
  selector: 'app-buttom-sheet',
  templateUrl: './buttom-sheet.component.html',
  styleUrls: ['./buttom-sheet.component.scss']
})
export class ButtomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ButtomSheetComponent>,
    private router: Router,
    private http:HttpService) { }

  ngOnInit() {
    this.http.get(this.http.api.prefix + this.http.api.type_getAll).subscribe((result:CommonResult) => {
      this.examItems = result.data;
    })
  }

  examItems:Type[];

  openLink(event: MouseEvent,id:number): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.router.navigate(['/examing',id]);
  }
}
