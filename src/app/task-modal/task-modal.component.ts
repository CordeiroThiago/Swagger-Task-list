import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../classes/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  @Input() task: Task = new Task();
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

    this.save(this.task);
    this.activeModal.close()
  }

}
