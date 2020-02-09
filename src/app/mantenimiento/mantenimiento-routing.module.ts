import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'curso',
        loadChildren: './components/curso/curso.module#CursoModule'
      },
      {
        path: 'origen',
        loadChildren: './components/origen/origen.module#OrigenModule'
      },
    ],
    data: {
      title: 'Mantenimiento'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
