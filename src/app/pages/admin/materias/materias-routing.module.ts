import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasPage } from './materias.page';

const routes: Routes = [
  {
    path: '',
    component: MateriasPage
  },
  {
    path: 'add',
    loadChildren: () => import('./addclass/addclass.module').then(m => m.AddclassPageModule)
  },
  
  {
    path: 'update/:id',
    loadChildren: () => import('./updateclass/updateclass.module').then(m => m.UpdateclassPageModule)
  },
  
  {
    path: 'detail/:id',
    loadChildren: () => import('./detailclass/detailclass.module').then(m => m.DetailclassPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriasPageRoutingModule { }
