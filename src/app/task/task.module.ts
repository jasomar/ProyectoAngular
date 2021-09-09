import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing/task-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    TaskListComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    HttpClientModule
  ]
})
export class TaskModule { }
