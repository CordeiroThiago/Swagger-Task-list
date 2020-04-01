import { Injectable } from '@angular/core';
import { Task } from '../classes/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  baseUrl= "/swagger/tasks/api/v2";

  constructor(private http: HttpClient) { }

  getStatus(listID: string): Observable<any> {
    const url = `${this.baseUrl}/lists/${listID}/task-status`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.get(url, httpOptions);
  }
}
