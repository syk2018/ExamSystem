import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatCardModule, MatIconModule, MatBottomSheetModule, MatListModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule
  ]
})
export class MaterialModule { }
