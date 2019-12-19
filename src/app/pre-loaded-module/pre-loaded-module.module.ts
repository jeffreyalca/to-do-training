import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreLoadedModuleRoutingModule } from './pre-loaded-module-routing.module';
import { PreLoadedModuleComponent } from './pre-loaded-module.component';

@NgModule({
  declarations: [PreLoadedModuleComponent],
  imports: [
    CommonModule,
    PreLoadedModuleRoutingModule
  ]
})
export class PreLoadedModuleModule { }
