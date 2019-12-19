import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoOverviewComponent} from './todo-overview.component';

const routes: Routes = [
  {
    path: '',
    component: TodoOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoOverviewRoutingModule { }
