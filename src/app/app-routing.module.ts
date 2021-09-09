import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path:'login', component:LoginFormComponent   },
  { path:'dashboard', component:DashboardComponent,
  children :[
    {
      path:'task',
      loadChildren:() => import('./task/task.module').then(m => m.TaskModule )
    }
  ]
  
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
