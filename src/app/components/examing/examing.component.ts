import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from 'src/app/interfaces/questions';
import { HttpService } from 'src/app/service/http.service';
import { CommonResult } from 'src/app/interfaces/common-result';
import { Sturesult } from 'src/app/interfaces/sturesult';
import { MatDialog } from '@angular/material';
import { SnackService } from 'src/app/service/snack.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-examing',
  templateUrl: './examing.component.html',
  styleUrls: ['./examing.component.scss']
})
export class ExamingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http:HttpService,
    private dialog: MatDialog,
    private snack: SnackService,) { }

  ngOnInit() {
    this.stuId = JSON.parse(localStorage.getItem('user')).id;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get(this.http.api.prefix + this.http.api.question_getQuestionByType + '?typeId=' + this.id +'&stuId=' + this.stuId + '&num=3')
    .subscribe( (result:CommonResult) => {
      
      this.questions = result.data;

      for(let i=0; i<this.questions.questionsChoices.length; i++) {
        this.results.push({
          id:null,
          stuid:this.stuId,
          examtime:new Date(),
          examid:this.questions.examId,
          questionid:this.questions.questionsChoices[i].id,
          answer:'',
          restotal:null
        })
      }

    });
  }

  questions:Questions = {
    examId:null,
    questionsChoices:null
  }

  results:Sturesult[] = [];


  id:number;
  stuId:number;

  back() {
    this.router.navigate(['/home']);
  }

  submit() {
    
    const dialogRef = this.dialog.open(LoadingComponent);
    
    for(let i=0; i<this.results.length; i++) {
      
      if(this.results[i].answer == this.questions.questionsChoices[i].answer) {
        this.results[i].restotal = 10;
      } else {
        this.results[i].restotal = 0;
      }
    }

    this.http.post(this.http.api.prefix + this.http.api.question_submit, this.results).subscribe(((results:CommonResult) => {
      if(results.data != null) {
        this.snack.showSnack('提交成功！', 2000);
        localStorage.removeItem('lastResults');
        localStorage.setItem('lastResults', JSON.stringify(results.data));
        this.router.navigateByUrl('/result');
      } else {
        this.snack.showSnack('未知错误，请重试！', 2000);
      }

      dialogRef.close();
    }))
  }
}
