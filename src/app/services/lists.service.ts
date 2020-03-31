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

  getLists(showDisabled = false): Observable<any> {
    const url =`${this.baseUrl}/lists${showDisabled ? "?active=false" : ""}`;
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

  updateList(list: List): void {
    console.log("List alterada");
  }

  disableList(listId: string): Observable<any> {
    const url = `${this.baseUrl}/lists/${listId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.delete(url, httpOptions);
  }

  enableList(listId: string): Observable<any> {
    const url = `${this.baseUrl}/lists/${listId}/activate`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };

    return this.http.post(url, {}, httpOptions);
  }
}