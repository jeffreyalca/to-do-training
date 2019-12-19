import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomPreloading} from './custom-preloading.strategy';

const routes: Routes = [
  {
    path: 'to-do-list',
    loadChildren: './todo-overview/todo-overview.module#TodoOverviewModule',
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: CustomPreloading,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
