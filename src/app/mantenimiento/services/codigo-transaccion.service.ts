import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodigoTransaccion } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class CodigoTransaccionService extends HttpService {
  path:string;

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ){
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}codigos-transacciones`);
    this.path = path;
  }

  buscarTodos(): Observable<any>{
    super.setEndpoint(`${this.path}codigos-transacciones`);
    return super.get();
  }

  registrar(codigoTransaccion: CodigoTransaccion): Observable<any>{
    super.setEndpoint(`${this.path}clases-transacciones`);
    return super.post(codigoTransaccion,`${codigoTransaccion.idClaseTransaccion}/codigos-transacciones`);
  }

  actualizar(codigoTransaccion: CodigoTransaccion): Observable<any>{
    super.setEndpoint(`${this.path}clases-transacciones`);
    return super.put(codigoTransaccion, `${codigoTransaccion.idClaseTransaccion}/codigos-transacciones/${codigoTransaccion.idCodigoTransaccion}`);
  }

  eliminar(codigoTransaccion: CodigoTransaccion): Observable<any>{
    super.setEndpoint(`${this.path}clases-transacciones`);
    return super.delete(`${codigoTransaccion.idClaseTransaccion}/codigos-transacciones/${codigoTransaccion.idCodigoTransaccion}`);
  }

  exportar(){
    super.setEndpoint('codigos-transacciones');
    return super.download(FILE_EXT.XLSX);
  }
}
