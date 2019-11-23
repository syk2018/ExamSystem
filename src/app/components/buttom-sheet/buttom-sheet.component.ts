import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { ExamItem } from 'src/app/interfaces/exam-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttom-sheet',
  templateUrl: './buttom-sheet.component.html',
  styleUrls: ['./buttom-sheet.component.scss']
})
export class ButtomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ButtomSheetComponent>,
    private router: Router,) { }

  ngOnInit() {
  }

  examItems:ExamItem[] = [
    {
      id:1,
      name:'Java'
    },
    {
      id:2,
      name:'C'
    },
    {
      id:3,
      name:'Python'
    }
  ];
  openLink(event: MouseEvent,id:number): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
    this.router.navigate(['/examing',id]);
  }
}
