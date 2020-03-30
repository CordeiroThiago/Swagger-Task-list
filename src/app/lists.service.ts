import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { List } from './classes/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getLists(): List[] {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic '
      })
    };
    const url = 'http://';
    
    this.http.post(url, {}, httpOptions).toPromise()
    .then(
      (data:any) => {
        console.log(data);
      }
    )
    this.http.get(url, httpOptions).toPromise()
    .then(
      (data:any) => {
        console.log(data);
      }
    )

    return [
      new List(1, "Exercícios"),
      new List(2, "Trabalho")
    ]
  }
}
