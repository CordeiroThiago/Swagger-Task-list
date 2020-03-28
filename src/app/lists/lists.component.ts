import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  title="Minhas listas"
  lists: Object[] = [
    {
      name: "bla",
      id:1
    },
    {
      name: "bl3",
      id:2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
