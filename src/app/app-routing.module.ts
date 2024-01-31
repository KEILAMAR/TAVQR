import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/auth/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recPassword',
    loadChildren: () => import('./pages/auth/rec-password/rec-password.module').then( m => m.RecPasswordPageModule)
  },   {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'perfilp',
    loadChildren: () => import('./pages/profesor/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'clasesp',
    loadChildren: () => import('./pages/profesor/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'listap',
    loadChildren: () => import('./pages/profesor/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'clasesa',
    loadChildren: () => import('./pages/alumno/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'listaa',
    loadChildren: () => import('./pages/alumno/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'leerqr',
    loadChildren: () => import('./pages/alumno/leerqr/leerqr.module').then( m => m.LeerqrPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/alumno/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'mostrarqr',
    loadChildren: () => import('./pages/profesor/mostrarqr/mostrarqr.module').then( m => m.MostrarqrPageModule)
  },
  {
    path: 'homep',
    loadChildren: () => import('./pages/profesor/homep/homep.module').then( m => m.HomepPageModule)
  },
  {
    path: 'homea',
    loadChildren: () => import('./pages/alumno/homea/homea.module').then( m => m.HomeaPageModule)
  },
  {
    path: 'perfila',
    loadChildren: () => import('./pages/alumno/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/admin/crudaccounts/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/admin/crudaccounts/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/admin/crudaccounts/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'addclass',
    loadChildren: () => import('./pages/admin/materias/addclass/addclass.module').then( m => m.AddclassPageModule)
  },
  {
    path: 'perfil-adm',
    loadChildren: () => import('./pages/admin/perfil-adm/perfil-adm.module').then( m => m.PerfilAdmPageModule)
  },
  {
    path: 'home-adm',
    loadChildren: () => import('./pages/admin/home-adm/home-adm.module').then( m => m.HomeAdmPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/profesor/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./pages/admin/materias/materias.module').then( m => m.MateriasPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
