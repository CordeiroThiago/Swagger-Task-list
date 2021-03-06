import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { ListsComponent } from './lists/lists.component';
import { NewItemComponent } from './new-item/new-item.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListModalComponent } from './list-modal/list-modal.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NotifierModule } from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    ListsComponent,
    NewItemComponent,
    TaskModalComponent,
    ListModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NotifierModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
