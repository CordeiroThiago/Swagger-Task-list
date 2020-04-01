import { NotifierService } from 'angular-notifier';
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
  loading = false;
  page = 0;
  hasNext = false;

  constructor(private _listsService: ListsService,
    private readonly notifier: NotifierService,
    private modalService: NgbModal) {
    this.getLists = this.getLists.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.archiveList = this.archiveList.bind(this);
    this.unarchiveList = this.unarchiveList.bind(this);
    this.createList = this.createList.bind(this);
    this.newList = this.newList.bind(this);
  }

  ngOnInit(): void {
    this.getLists();
  }

  getLists() {
    this.loading = true;
    this.lists = [];
    this.page = 0;

    this.loadMore();
  }

  loadMore() {
    this.page ++;
    this._listsService.getLists(this.page).subscribe(
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
        this.loading = false;
        this.hasNext = res.hasNext;
      },
      err => {
        console.log(err)
        this.notifier.notify("error", "Não foi possível carregar os registros");
        this.loading = false;
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
    this.loading = true;
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
        this.loading = false;
      },
      err => {
        console.log(err)
        this.notifier.notify("error", "Erro ao criar nova lista");
        this.loading = false;
      }
    )
  }

  saveChanges(list: List): void {
    this.loading = true;
    this._listsService.updateList(list).subscribe(
      res => {
        this.getLists();
      },
      err => {
        console.log(err);
        this.notifier.notify("error", "Erro ao salvar alterações");
        this.loading = false;
      }
    )
  }

  archiveList(listId: string): void {
    this.loading = true;
    this._listsService.archiveList(listId).subscribe(
      res => {
        this.getLists();
      },
      err => {
        console.log(err);
        this.notifier.notify("error", "Não foi possível arquivar lista");
        this.loading = false;
      }
    )
  }

  unarchiveList(listId: string): void {
    this.loading = true;
    this._listsService.unarchiveList(listId).subscribe(
      res => {
        this.getLists();
      },
      err => {
        console.log(err);
        this.notifier.notify("error", "Não foi possível recuperar lista");
        this.loading = false;
      }
    )
  }
}
