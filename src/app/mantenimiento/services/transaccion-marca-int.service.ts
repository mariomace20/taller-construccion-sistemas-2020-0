import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransaccionMarcaInt } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TransaccionMarcaIntService extends HttpService {
  path:string;

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ){
    let path:string;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}transacciones-marcas-internacionales`);
    this.path = path;
  }

  buscarPorMembresias(criterio: string): Observable<any>{
    super.setEndpoint(`${this.path}transacciones-marcas-internacionales/${criterio}`);
    return super.get();
  }

  buscarTodos(): Observable<any>{
    super.setEndpoint(`${this.path}transacciones-marcas-internacionales`);
    return super.get();
  }

  registrar(transaccionMarcaInt: TransaccionMarcaInt): Observable<any>{
    super.setEndpoint(`${this.path}transacciones-marcas-internacionales`);
    return super.post(transaccionMarcaInt, `${transaccionMarcaInt.idMembresia}/id-transaccion/${transaccionMarcaInt.idTransaccion}`);
  }

  actualizar(transaccionMarcaInt: TransaccionMarcaInt): Observable<any>{
    super.setEndpoint(`${this.path}transacciones-marcas-internacionales`);
    return super.put(transaccionMarcaInt, `${transaccionMarcaInt.idMembresia}/id-transaccion/${transaccionMarcaInt.idTransaccion}`);
  }

  eliminar(transaccionMarcaInt: TransaccionMarcaInt): Observable<any>{
    super.setEndpoint(`${this.path}transacciones-marcas-internacionales`);
    return super.delete(`${transaccionMarcaInt.idMembresia}/id-transaccion/${transaccionMarcaInt.idTransaccion}`);
  }

  exportar(){
    super.setEndpoint(`${this.path}transacciones-marcas-internacionales`);
    return super.download(FILE_EXT.XLSX);
  }
}
