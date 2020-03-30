import { TaskModalComponent } from './../task-modal/task-modal.component';
import { TasksService } from './../tasks.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../classes/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  title = "Tarefas"
  private routeSub: Subscription;
  listId: number;
  tasks: Task[];
  selectedTask: Task;

  constructor(private route: ActivatedRoute,
    private _tasksService: TasksService,
    private modalService: NgbModal) {
      this.saveChanges = this.saveChanges.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.createTask = this.createTask.bind(this);
      this.newTask = this.newTask.bind(this);
    }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.listId = params.listId
    })

    this.tasks = this._tasksService.getTasks(this.listId);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  toggleFinished(task: Task): void {
    task.status = (task.status == "finished") ? "open" : "finished";
    this._tasksService.updateTask(task);
  }

  newTask(): void {
    const taskModal = this.modalService.open(TaskModalComponent).componentInstance;
    taskModal.save = this.createTask;
  }

  openDetails(task: Task): void {
    const taskModal = this.modalService.open(TaskModalComponent).componentInstance;
    taskModal.task = task;
    taskModal.save = this.saveChanges;
  }

  createTask(task: Task): void {
    this._tasksService.createTask(task);
    this.tasks.push(task)
  }

  saveChanges(task: Task): void {
    this._tasksService.updateTask(task);
  }

  deleteTask(taskId: number): void {
    this._tasksService.deleteTask(taskId);
  }
}
