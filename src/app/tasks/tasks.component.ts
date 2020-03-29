import { TasksService } from './../tasks.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  title = "Tarefas"
  private routeSub: Subscription;
  listId: number;
  tasks: object[];

  constructor(private route: ActivatedRoute, private _tasksService: TasksService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.listId = params.listId
      console.log(this.listId)
    })

    this.tasks = this._tasksService.getTasks(this.listId);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  toggleFinished(task): void {
    task.status = (task.status == "finished") ? "open" : "finished";
  }
}
