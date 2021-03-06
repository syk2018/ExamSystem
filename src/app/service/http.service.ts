import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommonResult } from '../interfaces/common-result';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  public api = {
    prefix: 'https://syk2018.cn',
    user_login:'/web/rep/users/login',
    user_signUp:'/web/rep/users/signUp',
    type_create:'/web/rep/Type/create',
    type_getAll:'/web/rep/Type/getAll',
    question_createChoice:'/web/rep/question/createChoice',
    question_getExamByStudentId:'/web/rep/question/getExamById',
    question_getQuestionByType: '/web/rep/question/getQuestionByType',
    question_getResultById: '/web/rep/question/getResultById',
    question_submit: '/web/rep/question/submit',
    question_getChoiceById:'/web/rep/question/getChoiceById'
  }

  get(url:string , headers:HttpHeaders = null) {
    if(headers) {
      const httpOptions = {
        headers:headers
      }
      return this.http.get<CommonResult>(url,httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    } else {
      return this.http.get<CommonResult>(url).pipe(
        catchError(this.handleError)
      );
    }
  }

  post(url:string , body:any ,headers:HttpHeaders = null) {
    if(headers) {
      const httpOptions = {
        headers:headers
      }
      return this.http.post<CommonResult>(url, body, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    } else {
      return this.http.post<CommonResult>(url, body)
        .pipe(
          catchError(this.handleError)
        )
    }
  }
}
