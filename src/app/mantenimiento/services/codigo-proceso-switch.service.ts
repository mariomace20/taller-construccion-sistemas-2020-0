import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { CodigoProcesoSwitch } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class CodigoProcesoSwitchService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}codigos-procesos-switches`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(codigoProcesoSwitch: CodigoProcesoSwitch): Observable<any> {
    return super.post(codigoProcesoSwitch);
  }

  actualizar(codigoProcesoSwitch: CodigoProcesoSwitch): Observable<any> {
    return super.put(codigoProcesoSwitch, codigoProcesoSwitch.idCodigoProcesoSwitch);
  }

  eliminar(codigoProcesoSwitch: CodigoProcesoSwitch): Observable<any> {
    return super.delete(codigoProcesoSwitch.idCodigoProcesoSwitch);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
