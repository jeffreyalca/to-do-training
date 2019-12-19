import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreLoadedModuleComponent} from './pre-loaded-module.component';

const routes: Routes = [
  {
    path: '',
    component: PreLoadedModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreLoadedModuleRoutingModule { }
