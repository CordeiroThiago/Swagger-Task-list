import { StatusService } from './../services/status.service';
import { TaskModalComponent } from './../task-modal/task-modal.component';
import { TasksService } from '../services/tasks.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../classes/task';
import { Status } from '../classes/status';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  title = "Tarefas"
  private routeSub: Subscription;
  listId: string;
  tasks: Task[] = [];
  selectedTask: Task;
  loading = false;
  statusList: Status[] = [];

  constructor(private route: ActivatedRoute,
    private _tasksService: TasksService,
    private _statusService: StatusService,
    private modalService: NgbModal) {
    this.getTasks = this.getTasks.bind(this);
    this.getStatusList = this.getStatusList.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.createTask = this.createTask.bind(this);
    this.newTask = this.newTask.bind(this);
    this.deactivateTask = this.deactivateTask.bind(this);
    this.activateTask = this.activateTask.bind(this);
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.listId = params.listId
    })

    this.getTasks();
  }

  getTasks(active = true, page = 1) {
    this.loading = true;
    this.tasks = [];

    this._tasksService.getTasks(this.listId).subscribe(
      res => {
        res.items.forEach(task => {
          this.tasks.push(
            new Task(
              task.id,
              task.name,
              task.description,
              new Status(
                task.status.id,
                task.status.name,
                task.status.statusType,
                task.status.color,
                task.status.active,
                task.status.listId,
                task.status.createDate,
                task.status.updateDate,
                task.status.enableTaskCreation,
                task.status.sortValue,
                task.status.authorId,
                task.status.tenantId
              ),
              task.active,
              task.listId,
              task.createDate,
              task.updateDate,
              task.sortValue,
              task.authorId,
              task.tenantId
            )
          );
        });
        this.loading = false;
        this.getStatusList()
      },
      err => {
        console.log(err)
        alert("não foi possivel concluir a ação")
        this.loading = false;
      }
    )
  }

  getStatusList(){
    this.statusList = [];

    this._statusService.getStatus(this.listId).subscribe(
      res => {
        res.items.forEach(status => {
          this.statusList.push(
            new Status(
              status.id,
              status.name,
              status.statusType,
              status.color,
              status.active,
              status.listId,
              status.createDate,
              status.updateDate,
              status.enableTaskCreation,
              status.sortValue,
              status.authorId,
              status.tenantId
            )
          );
        });
        console.log(this.statusList)
      },
      err => {
        console.log(err)
        alert("não foi possivel concluir a ação")
        this.loading = false;
      }
    )
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  newTask(): void {
    const taskModal = this.modalService.open(TaskModalComponent).componentInstance;
    taskModal.save = this.createTask;
  }

  openDetails(task: Task): void {
    const taskModal = this.modalService.open(TaskModalComponent).componentInstance;
    taskModal.task = task;
    taskModal.statusList = this.statusList;
    taskModal.save = this.saveChanges;
  }

  createTask(task: Task): void {
    this.loading = true;
    this._tasksService.createTask(this.listId, task).subscribe(
      task => {
        this.tasks.push(
          new Task(
            task.id,
            task.name,
            task.description,
            new Status(
              task.status.id,
              task.status.name,
              task.status.statusType,
              task.status.color,
              task.status.active,
              task.status.listId,
              task.status.createDate,
              task.status.updateDate,
              task.status.enableTaskCreation,
              task.status.sortValue,
              task.status.authorId,
              task.status.tenantId
            ),
            task.active,
            task.listId,
            task.createDate,
            task.updateDate,
            task.sortValue,
            task.authorId,
            task.tenantId
          )
        );
        this.loading = false;
      },
      err => {
        console.log(err)
        alert("não foi possivel concluir a ação")
        this.loading = false;
      }
    )
  }

  saveChanges(task: Task): void {
    this._tasksService.updateTask(task).subscribe(
      res => {
        this.getTasks();
      },
      err => {
        console.log(err);
        alert("não foi possivel concluir a ação")
        this.loading = false;
      }
    )
  }

  deactivateTask(task: Task): void {
    this._tasksService.deactivateTask(task).subscribe(
      res => {
        this.getTasks();
      },
      err => {
        console.log(err);
        alert("não foi possivel concluir a ação")
        this.loading = false;
      }
    )
  }

  activateTask(task: Task): void {
    this._tasksService.activateTask(task).subscribe(
      res => {
        this.getTasks();
      },
      err => {
        console.log(err);
        alert("não foi possivel concluir a ação")
        this.loading = false;
      }
    )
  }
}
