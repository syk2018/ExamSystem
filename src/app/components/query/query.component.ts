import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Exam } from 'src/app/interfaces/exam';
import { Students } from 'src/app/interfaces/students';
import { CommonResult } from 'src/app/interfaces/common-result';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  constructor(private router: Router,
    private dialog: MatDialog,
    private http:HttpService) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(LoadingComponent);
    this.profile = JSON.parse(localStorage.getItem('user'));
    this.http.get(this.http.api.prefix + this.http.api.question_getExamByStudentId + '?stuId=' + this.profile.id).subscribe((result:CommonResult) => {
      if(result.data!= null) {
        
        this.exam = result.data;
        
        dialogRef.close();
      }
    })
  }

  profile:Students;
  exam:Exam[] = [];
  
  back() {
    this.router.navigate(['/home']);
  }

  getDetails(id:number) {
    this.router.navigate(['/details',id]);
  }
}
