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
  sessionId = 0;
  tasksArray: Array<any> = [];
  ngOnInit(){
    const savedSessionId = localStorage.getItem('sessionId');
    if(savedSessionId){
      this.sessionId += Number(savedSessionId);
    }
    let savedTasks = localStorage.getItem('sessionTask');
    if(savedTasks){
      this.tasksArray = JSON.parse(savedTasks);
    }
    console.log(this.tasksArray);
    console.log(this.sessionId);

  }
  addTask(){
  
    console.log(this.tasksArray);
    let data  = {id:this.sessionId,tasks:this.task}
    let tasks = localStorage.getItem('sessionTask')
    this.tasksArray = tasks ? JSON.parse(tasks) : [];
    this.tasksArray.push(data)
    localStorage.setItem('sessionTask',JSON.stringify(this.tasksArray))
    this.sessionId+=1;
    localStorage.setItem('sessionId',String(this.sessionId))
    

  }
  deleteAllTask(){
    localStorage.clear();
  }
}
