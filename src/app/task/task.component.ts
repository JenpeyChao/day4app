import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  title = 'Task Manager';
  task = '';
  tasklen:number = 0;
  taskId = null;
  tasksArray: Array<any> = [];
  ngOnInit(){

    let savedTasks = localStorage.getItem('sessionTask');
    if(savedTasks){
      this.tasksArray = JSON.parse(savedTasks);
    }
    console.log(this.tasksArray);
    this.tasklen = this.tasksArray.length;

  }
  addTask(){
  
    console.log(this.tasksArray);

    let tasks = localStorage.getItem('sessionTask')
    this.tasksArray = tasks ? JSON.parse(tasks) : [];
    this.tasksArray.push(this.task)
    localStorage.setItem('sessionTask',JSON.stringify(this.tasksArray))

    this.task = '';
    

  }
  deleteAllTask(){
    console.log("cleared the array")
    localStorage.clear();
    this.tasksArray = []
  }
  deleteTask(){
    console.log("deleted " + this.taskId)
    if(this.taskId != null)
      this.tasksArray.splice(this.taskId-1,1)
    localStorage.setItem("sessionTask", JSON.stringify(this.tasksArray))
    this.taskId = null
  }
}
