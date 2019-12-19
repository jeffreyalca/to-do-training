import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoOverviewComponent } from './todo-overview.component';
import {TodoOverviewRoutingModule} from './todo-overview-routing.module';
import {CoreModule} from '../core/core.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoOverviewComponent, TodoListComponent],
  imports: [
    CommonModule,
    CoreModule,
    TodoOverviewRoutingModule,
    FormsModule,
  ]
})
export class TodoOverviewModule { }
