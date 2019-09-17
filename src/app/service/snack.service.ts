import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar) { }

  showSnack(message: string, duration: number) {
    this.snackBar.open(message,'',{
      duration: duration
    });
  }

}
