import { Injectable } from '@angular/core';
import { Task } from './classes/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(listID: number): Task[] {
    return (listID == 1) ? 
    [
      new Task(1, "Flexões", "Fazer 50 flexões", "open"),
      new Task(2, "Abdominais", "Fazer 30 abdominais", "open")
    ]
    :
    [
      new Task(1, "Reunião LGPDP", "Reunião LGPDP 05/05/2020 15:00", "open"),
      new Task(2, "Entrevista", "Realizar entrevista de funcionário", "finished")
    ]
  }

  createTask(task: Task): void {
    console.log(`Task ${task.name} criada`);
  }

  updateTask(task: Task): void {
    console.log("Task alterada");
  }

  deleteTask(taskId: number): void {
    console.log(`Task ${taskId} deletada`);
  }
}
