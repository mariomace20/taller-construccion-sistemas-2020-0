import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'asignacion-espacios',
        loadChildren: './components/asignacion-espacios/asignacion-espacios.module#AsignacionEspaciosModule'
      },
    ],
    data: {
      title: 'Procesos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesosRoutingModule { }
