import { Injectable } from '@angular/core';
import { Task } from '../classes/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl= "/swagger/tasks/api/v2";

  constructor(private http: HttpClient) { }

  getTasks(listID: string): Observable<any> {
    const url = `${this.baseUrl}/lists/${listID}/tasks?expand=status`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.get(url, httpOptions);
  }

  createTask(listId: string, task: Task): Observable<any> {
    const url = `${this.baseUrl}/lists/${listId}/tasks?expand=status`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };
    const requestTask = {
      name: task.name,
      description: task.description
    }

    return this.http.post(url, requestTask, httpOptions);
  }

  closeTask(task: Task): Observable<any> {
    const url = `${this.baseUrl}/lists/${task.listId}/tasks/${task.id}/close`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.post(url, {}, httpOptions);
  }

  openTask(task: Task): Observable<any> {
    const url = `${this.baseUrl}/lists/${task.listId}/tasks/${task.id}/open`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.post(url, {}, httpOptions);
  }

  updateTask(task: Task): void {
    console.log("Task alterada");
  }

  deleteTask(taskId: string): void {
    console.log(`Task ${taskId} deletada`);
  }
}
