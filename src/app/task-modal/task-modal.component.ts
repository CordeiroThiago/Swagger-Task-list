import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../classes/task';
import { NgForm } from '@angular/forms';
import { Status } from '../classes/status';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  @Input() task: Task = new Task();
  @Input() statusList: Status[] = [];
  @Input() save: Function;
  @Input() delete: Function;
  errorMessage: string = "";

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    
    this.task.name = form.value.name;
    this.task.description = form.value.description;
    this.task.status = form.value.status;

    this.save(this.task);
    this.activeModal.close()
  }

  statusCompare(s1: Status, s2: Status) {
    return s1 && s2 ? (s1.id === s2.id) : s1 === s2;
  }
}
