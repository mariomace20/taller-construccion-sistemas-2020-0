import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { CodigoRptaSwitch } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class CodigoRptaSwitchService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_PROCESAMIENTO);
    super(injector, httpClient, `${path}codigos-respuestas-switches`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(codigoRptaSwitch: CodigoRptaSwitch): Observable<any> {
    return super.post(codigoRptaSwitch);
  }

  actualizar(codigoRptaSwitch: CodigoRptaSwitch): Observable<any> {
    return super.put(codigoRptaSwitch, codigoRptaSwitch.idCodigoRespuestaSwitch);
  }

  eliminar(codigoRptaSwitch: CodigoRptaSwitch): Observable<any> {
    return super.delete(codigoRptaSwitch.idCodigoRespuestaSwitch);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
