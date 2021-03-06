import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtomSheetComponent } from './components/buttom-sheet/buttom-sheet.component';
import { QueryComponent } from './components/query/query.component';
import { ExamingComponent } from './components/examing/examing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResultComponent } from './components/result/result.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { DetailsComponent } from './components/details/details.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingComponent,
    ButtomSheetComponent,
    QueryComponent,
    ExamingComponent,
    SignUpComponent,
    ResultComponent,
    DetailsComponent,
  ],
  entryComponents: [
    LoadingComponent,
    ButtomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
