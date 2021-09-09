import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { TaskService } from '../task.service';
import { Task } from './taks.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  public taskStatus = ['Creada','En Progreso','Terminada'];
  public taskPriority = ['Muy Baja ','Baja','Media','Alta','Crítica'];

  public taskFormGroup: FormGroup = new FormGroup({
    title: new FormControl(),
    code: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    status: new FormControl(),
    hashtags: new FormControl(),
    priority: new FormControl(),
    complexLevel: new FormControl()
  });

  public onSubmit(){

    
      this.validate();

    
  }
  
  constructor(private taskService : TaskService, private authService :AuthService) { }

  ngOnInit(): void {
  }

  validate(){
    const task: Task = this.taskFormGroup.value;
    console.log(task)
    if (task.title != null &&  task.code != null
        && task.endDate != null && task.startDate != null
        && task.hashtags != null && task.priority != null
        && task.status != null && task.complexLevel != null
      ) 
      {
       
        this.taskService.addTask(task,this.authService.user.username)
          .subscribe((next)=>{
            alert("Tarea Agregada");
            this.taskFormGroup.reset();
          }, (error)=>{
          alert("Error al agregar")
      });
      
    }else{
      alert("Todos los campos son requeridos");
    }
    
  }
}
