import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudEspaciosRoutingModule } from './solicitud-espacios-routing.module';
import { SolicitudEspaciosComponent } from './solicitud-espacios.component';
import { SharedModule } from '../../../shared/shared.module';
import { AsignacionEspaciosFacade } from '../../facade';
import { ObGridModule } from '../../../shared/ob-grid.module';

@NgModule({
  declarations: [SolicitudEspaciosComponent],
  imports: [
    CommonModule,
    SharedModule,
    ObGridModule,
    SolicitudEspaciosRoutingModule
  ],
  providers: [
    AsignacionEspaciosFacade
  ]
})
export class SolicitudEspaciosModule { }
