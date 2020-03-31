import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { List } from '../classes/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  baseUrl= "/swagger/tasks/api/v2";

  constructor(private http: HttpClient) { }

  getLists(): Observable<any> {
    const url =`${this.baseUrl}/lists`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.get(url, httpOptions);
  }

  createList(list: List): Observable<any> {
    const url = `${this.baseUrl}/lists`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };
    const requestList = {
      name: list.name,
      description: list.description
    }

    return this.http.post(url, requestList, httpOptions);
  }

  updateList(list: List): Observable<any> {
    const url = `${this.baseUrl}/lists/${list.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };
    const requestList = {
      name: list.name,
      description: list.description
    }

    return this.http.put(url, requestList, httpOptions);
  }

  archiveList(listId: string): Observable<any> {
    const url = `${this.baseUrl}/lists/${listId}/archive`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.post(url, {}, httpOptions);
  }

  unarchiveList(listId: string): Observable<any> {
    const url = `${this.baseUrl}/lists/${listId}/unarchive`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.post(url, {}, httpOptions);
  }
}