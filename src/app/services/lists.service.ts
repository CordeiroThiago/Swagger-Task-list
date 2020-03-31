import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getLists(): Observable<any> {
    const url = "/swagger/tasks/api/v2/lists";
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    };
    console.log(`Bearer ${localStorage.getItem("token")}`)

    return this.http.get(url, httpOptions);
    /*
    return [
      new List(1, "Exercícios"),
      new List(2, "Trabalho")
    ]*/
  }
}