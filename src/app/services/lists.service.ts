import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { List } from '../classes/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getLists(): List[] {
    return [
      new List(1, "Exercícios"),
      new List(2, "Trabalho")
    ]
  }
}
