import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExamingComponent } from './components/examing/examing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResultComponent } from './components/result/result.component';
import { QueryComponent } from './components/query/query.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'query',
    component: QueryComponent
  },
  {
    path:'signup',
    component: SignUpComponent
  },
  {
    path: 'examing/:id',
    component:ExamingComponent
  },
  {
    path: 'details/:id',
    component:DetailsComponent
  },
  {
    path: 'result',
    component:ResultComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
