import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from '../task-form/taks.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService : TaskService , private authService : AuthService) { }

  public tasks : Array<Task> = [];

  ngOnInit(): void {
    this.getTasks();
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(task,this.authService.user.username)
    .subscribe((next)=>{
      alert('Tarea Eliminada');
      this.getTasks();
    }, (error)=>{
      this.getTasks();  
    });
  }

  getTasks(){
    this.taskService.getTasks(this.authService.user.username)
    .subscribe((next: any)=>{
      this.tasks = next;
    }, (error)=>{
      alert('Error al cargar las tareas');
    });
  }
}
