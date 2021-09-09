import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Task } from './task-form/taks.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public addTask(task : Task , username : String){
    return this.http.post('https://u-task-api.herokuapp.com/task/'+ username,task)
  }

  public deleteTask(task : Task , username: String){
    return this.http.delete('https://u-task-api.herokuapp.com/task/'+username+'?taskId='+task.code)
  }

  public getTasks(username: String){
    return this.http.get('https://u-task-api.herokuapp.com/user/'+username)
  }



  constructor( private http:HttpClient, private authService : AuthService) { }
}
