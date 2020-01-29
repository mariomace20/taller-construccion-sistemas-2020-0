import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClaseTransaccion } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ClaseTransaccionService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path: string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}clases-transacciones`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(claseTransaccion: ClaseTransaccion): Observable<any> {
    return super.post(claseTransaccion);
  }

  actualizar(claseTransaccion: ClaseTransaccion): Observable<any> {
    return super.put(claseTransaccion, claseTransaccion.idClaseTransaccion);
  }

  eliminar(claseTransaccion: ClaseTransaccion): Observable<any> {
    return super.delete(claseTransaccion.idClaseTransaccion);
  }

  buscarCodigosTransaccion(claseTransaccion: ClaseTransaccion): Observable<any> {
    return super.get(`/${claseTransaccion.idClaseTransaccion}/codigos-transacciones`);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }

}