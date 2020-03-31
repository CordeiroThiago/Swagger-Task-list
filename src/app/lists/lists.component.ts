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
  lists: List[] = []; 

  constructor(private _listsService: ListsService, private modalService: NgbModal) {
    this.getLists = this.getLists.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.disableList = this.disableList.bind(this);
    this.enableList = this.enableList.bind(this);
    this.createList = this.createList.bind(this);
    this.newList = this.newList.bind(this);
  }

  ngOnInit(): void {
    this.getLists();
  }

  getLists(showDisabled = false) {
    this.lists = [];
    this._listsService.getLists(showDisabled).subscribe(
      res => {
        res.items.forEach(list => {
          this.lists.push(
            new List(
              list.id,
              list.name,
              list.description,
              list.active,
              list.archived,
              new Date(list.createDate),
              new Date(list.updateDate),
              list.sortValue,
              list.authorId,
              list.tenantId
            )
          );
        });
      },
      err => {
        console.log(err)
      }
    )
  }

  newList(): void {
    const taskModal = this.modalService.open(ListModalComponent).componentInstance;
    taskModal.save = this.createList;
  }

  openDetails(list: List): void {
    const taskModal = this.modalService.open(ListModalComponent).componentInstance;
    taskModal.list = list;
    taskModal.save = this.saveChanges;
  }

  createList(list: List): void {
    this._listsService.createList(list).subscribe(
      list => {
        this.lists.push(
          new List(
            list.id,
            list.name,
            list.description,
            list.active,
            list.archived,
            new Date(list.createDate),
            new Date(list.updateDate),
            list.sortValue,
            list.authorId,
            list.tenantId
          )
        );
      },
      err => {
        console.log(err)
      }
    )
  }

  saveChanges(list: List): void {
    this._listsService.updateList(list);
  }

  disableList(listId: string): void {
    this._listsService.disableList(listId).subscribe(
      res => {
        this.getLists();
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  enableList(listId: string): void {
    this._listsService.enableList(listId).subscribe(
      res => {
        this.getLists();
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
