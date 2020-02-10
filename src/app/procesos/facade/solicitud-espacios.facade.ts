import { Injectable } from '@angular/core';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SolicitudEspaciosService } from '../services';
import { GetAllAsignacionEspacios } from '../../shared/store/actions/procesos/asignacion-espacios.actions';
import { UpdateAsignacionEspacios } from '../../shared/store/actions/procesos/asignacion-espacios.actions';

@Injectable()
export class SolicitudEspaciosFacade {

  constructor(
    private store: Store<AppState>,
    private service: SolicitudEspaciosService
  ){}

  buscarTodos(): Observable<any>{
    return this.service.buscarTodos();
  }

  initData(){
    this.store.dispatch(new GetAllAsignacionEspacios());
  }

  actualizar(form: any){
    this.store.dispatch(new UpdateAsignacionEspacios(form));
  }

  registrar(data: any): Observable<any>{
    return this.service.registrar(data);
  }
}
