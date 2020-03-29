import { ListsService } from './../lists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  title="Minhas listas";
  lists: Object[]; 

  constructor(private _listsService: ListsService) { }

  ngOnInit(): void {
    this.lists = this._listsService.getLists();
  }
}
