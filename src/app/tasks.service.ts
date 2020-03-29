import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(listID: number): Object[] {
    return (listID == 1) ? 
    [
      {
        id: 1,
        name: "Flexões",
        description: "Fazer 50 flexões",
        status: "open"
      },
      {
        id: 2,
        name: "Abdominais",
        description: "Fazer 30 abdominais",
        status: "open"
      }
    ]
    :
    [
      {
        id: 1,
        name: "Reunião LGPDP",
        description: "Reunião LGPDP 05/05/2020 15:00",
        status: "open"
      },
      {
        id: 2,
        name: "Entrevista",
        description: "Realizar entrevista de funcionário.",
        status: "finished"
      }
    ]
  }
}
