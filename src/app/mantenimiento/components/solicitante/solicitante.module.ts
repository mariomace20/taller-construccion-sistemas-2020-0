import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitanteRoutingModule } from './solicitante-routing.module';
import { SolicitanteComponent } from './solicitante.component';
import { SharedModule } from '../../../shared/shared.module';
import { SolicitanteFacade } from '../../facade';
import { ObGridModule } from '../../../shared/ob-grid.module';

@NgModule({
  declarations: [SolicitanteComponent],
  imports: [
    CommonModule,
    SharedModule,
    ObGridModule,
    SolicitanteRoutingModule
  ],
  providers: [
    SolicitanteFacade
  ]
})
export class SolicitanteModule { }
