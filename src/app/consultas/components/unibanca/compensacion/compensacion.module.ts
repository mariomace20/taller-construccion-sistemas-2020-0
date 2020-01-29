import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensacionRoutingModule } from './compensacion-routing.module';
import {CompensacionComponent } from './compensacion.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CompensacionFacade } from '../../../facade';
import { TransaccionMarcaIntFacade, InstitucionFacade, MonedaFacade, IndLimitePisoFacade} from '../../../../mantenimiento/facade';
import { ObGridModule } from '../../../../shared/ob-grid.module';
import { ObDatepickerModule } from '../../../../shared/ob-datepicker.module';

@NgModule({
  declarations: [CompensacionComponent],
  imports: [
    CommonModule,
    SharedModule,
    ObGridModule,
    ObDatepickerModule,
    CompensacionRoutingModule
  ],
  providers: [
    CompensacionFacade,
    MonedaFacade,
    TransaccionMarcaIntFacade,
    InstitucionFacade,
    IndLimitePisoFacade
  ]
})
export class CompensacionModule { }
