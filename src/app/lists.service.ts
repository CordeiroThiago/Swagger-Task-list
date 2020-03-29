import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  getLists(): Object[] {
    return [
      {
        name: "Exercícios",
        id:1
      },
      {
        name: "Trabalho",
        id:2
      }
    ]
  }
}
