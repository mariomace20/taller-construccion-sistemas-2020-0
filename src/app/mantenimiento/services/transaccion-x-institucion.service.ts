import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { TransaccionXinstitucion } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TransaccionXinstitucionService extends HttpService{

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ){
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}instituciones-transacciones`);
  }

  buscarTodos(): Observable<any>{
    super.setEndpoint('instituciones-transacciones');
    return super.get();
  }

  registrar(transaccionXinstitucion: TransaccionXinstitucion): Observable<any>{
    super.setEndpoint(`instituciones/${transaccionXinstitucion.idInstitucion}`);
    return super.post(transaccionXinstitucion);
  }

  actualizar(transaccionXinstitucion: TransaccionXinstitucion): Observable<any>{
    return super.put(transaccionXinstitucion);
  }

  eliminar(transaccionXinstitucion: TransaccionXinstitucion): Observable<any>{
    super.setEndpoint('instituciones');
    return super.delete(`${transaccionXinstitucion.idInstitucion}/clases-transacciones/${transaccionXinstitucion.idClaseTransaccion}/codigos-transacciones/${transaccionXinstitucion.idCodigoTransaccion}`);
  }

  exportar(){
    super.setEndpoint(`instituciones-transacciones`);
    return super.download(FILE_EXT.XLSX);
  }
}