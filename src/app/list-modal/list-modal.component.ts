import { List } from './../classes/list';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  @Input() list: List = new List();
  @Input() save: Function;
  @Input() delete: Function;
  errorMessage: string = "";

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    
    this.list.name = form.value.name;
    this.list.description = form.value.description;

    this.save(this.list);
    this.activeModal.close()
  }
}
