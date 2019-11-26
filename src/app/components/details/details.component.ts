import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionChoice } from 'src/app/interfaces/question-choice';
import { HttpService } from 'src/app/service/http.service';
import { CommonResult } from 'src/app/interfaces/common-result';
import { Sturesult } from 'src/app/interfaces/sturesult';
import { MatDialog } from '@angular/material';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private http:HttpService) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(LoadingComponent);
    this.examId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get(this.http.api.prefix + this.http.api.question_getResultById + "?examId=" + this.examId).subscribe((result:CommonResult) => {
      if(result.data!= null) {
        this.result = result.data;
        
        for(let i=0; i<this.result.length; i++) {
          this.id.push(this.result[i].questionid);
        }
        this.http.post(this.http.api.prefix + this.http.api.question_getChoiceById,this.id).subscribe((result:CommonResult) => {
          if(result.data != null) {
            this.choices = result.data;
            dialogRef.close();
          }
        })
      }
    })
  }

  examId:number;

  choices:QuestionChoice[] = [];

  result:Sturesult[] = [];

  id:number[] = [];
  back() {
    this.router.navigate(['/home']);
  }
}
