import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateclassPage } from './updateclass.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateclassPageRoutingModule {}
