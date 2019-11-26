import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from 'src/app/interfaces/questions';
import { HttpService } from 'src/app/service/http.service';
import { CommonResult } from 'src/app/interfaces/common-result';
import { Sturesult } from 'src/app/interfaces/sturesult';

@Component({
  selector: 'app-examing',
  templateUrl: './examing.component.html',
  styleUrls: ['./examing.component.scss']
})
export class ExamingComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,
    private http:HttpService) { }

  ngOnInit() {
    this.stuId = JSON.parse(localStorage.getItem('user')).id;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.http.get(this.http.api.prefix + this.http.api.question_getQuestionByType + '?typeId=' + this.id +'&stuId=' + this.stuId + '&num=3')
    .subscribe( (result:CommonResult) => {
      console.log(result);
      this.questions = result.data;
      console.log(this.questions);
      for(let i=0; i<this.questions.questionsChoices.length; i++) {
        this.results.push({
          id:null,
          stuId:this.stuId,
          examtime:new Date(),
          examId:this.questions.examId,
          quesId:this.questions.questionsChoices[i].id,
          answer:null,
          restotal:null
        })
      }
    });
  }

  questions:Questions = {
    examId:null,
    questionsChoices:null
  }

  results:Sturesult[] = null;


  id:number;
  stuId:number;

  back() {
    this.router.navigate(['/home']);
  }

  submit() {
    
  }
}
