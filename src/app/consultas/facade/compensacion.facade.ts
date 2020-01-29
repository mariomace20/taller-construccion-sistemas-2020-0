import { Injectable } from '@angular/core';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import {
  GetDetalleCompensacion,
  GetCriterioCompensacion,
  ResetCompensacion
} from '../../shared/store/actions/consultas/compensacion.actions';
import { GetComisCompensacion } from '../../shared/store/actions/consultas/comis-compensacion.actions';
import { GetAllMembresia } from '../../shared/store/actions/mantenimiento/membresia.actions';
import { GetAllOrigen } from '../../shared/store/actions/mantenimiento/origen.actions';
import { GetAllClaseTransaccion } from '../../shared/store/actions/mantenimiento/clase-transaccion.action';
import { GetAllCodigoTransaccion } from '../../shared/store/actions/mantenimiento/codigo-transaccion.action';
import { GetAllRolTransaccion } from '../../shared/store/actions/mantenimiento/rol-transaccion.actions';
import { GetAllCanal } from '../../shared/store/actions/mantenimiento/canal.actions';
import { GetAllServicio } from '../../shared/store/actions/mantenimiento/servicio.actions';
import { GetAllInstitucion } from '../../shared/store/actions/mantenimiento/institucion.actions';
import { GetAllBin } from '../../shared/store/actions/mantenimiento/bin.actions';
import { GetAllCodigoRptaSwitch } from '../../shared/store/actions/mantenimiento/codigo-rpta-switch.actions';
import { GetAllMoneda } from '../../shared/store/actions/mantenimiento/moneda.actions';
import { GetAllOrigenArchivo } from '../../shared/store/actions/mantenimiento/origen-archivo.actions';
import { CompensacionService } from '../service/compensacion.service';
import { GetAllParametroRep } from '../../shared/store/actions/reportes/parametro-rep.actions';
import { Observable } from 'rxjs';

@Injectable()
export class CompensacionFacade {

  constructor(
    private store: Store<AppState>,
    private compensacionService: CompensacionService
  ) { }

  buscarCriterios(criteriosReq: any, criteriosFilters: any) {
    let criterio = {
      ...criteriosFilters,
      ...criteriosReq,
    }
    this.store.dispatch(new GetCriterioCompensacion(criterio));
  }

  buscarDetalle(idSecuencia: any) {
    //console.log(idSecuencia);
    this.buscarPorSecuenciaCompensacion(idSecuencia);

  }
  buscarComisiones(idSecuencia: any) {
    this.buscarComisionesPorSecuenciaCompensacion(idSecuencia);
  }

  buscarPorSecuenciaCompensacion(criterio: any) {
    this.store.dispatch(new GetDetalleCompensacion({ "idSecuencia": criterio }));
  }
  buscarComisionesPorSecuenciaCompensacion(criterio: any) {
    this.store.dispatch(new GetComisCompensacion({ "idSecuencia": criterio }));
  }

  /* Para llenar los combos de la pagina del Log Contable*/
  initData() {
    this.store.dispatch(new GetAllParametroRep());
    this.store.dispatch(new GetAllMembresia());
    this.store.dispatch(new GetAllServicio());
    this.store.dispatch(new GetAllOrigen());
    this.store.dispatch(new GetAllClaseTransaccion());
    this.store.dispatch(new GetAllCodigoTransaccion());
    this.store.dispatch(new GetAllRolTransaccion());
    this.store.dispatch(new GetAllCanal());
    this.store.dispatch(new GetAllInstitucion());
    this.store.dispatch(new GetAllBin());
    this.store.dispatch(new GetAllCodigoRptaSwitch());
    this.store.dispatch(new GetAllMoneda());
    this.store.dispatch(new GetAllOrigenArchivo());
  }

  buscarFiltrosOrdenamiento(criteriosFilters: any, criteriosReq: any): Observable<any> {
    let criterio = {
      ...criteriosFilters,
      ...criteriosReq,
      pageNum: 1
    }
    return this.compensacionService.buscarPorCriterios(criterio);
  }

  resetCompensacion() {
    this.store.dispatch(new ResetCompensacion());
  }
}
