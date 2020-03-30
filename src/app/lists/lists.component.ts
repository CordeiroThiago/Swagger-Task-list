import { ListModalComponent } from './../list-modal/list-modal.component';
import { ListsService } from '../services/lists.service';
import { Component, OnInit } from '@angular/core';
import { List } from '../classes/list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  title="Minhas listas";
  lists: List[]; 

  constructor(private _listsService: ListsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.lists = this._listsService.getLists();
  }

  newList(): void {
    const taskModal = this.modalService.open(ListModalComponent).componentInstance;
    taskModal.save = this.createList;
  }

  createList(list: List): void {

  }
}
