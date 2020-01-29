import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { CodigoRazonCobroVisa } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class CodigoRazonCobroVisaService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}codigos-razon`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(codigoRazonCobroVisa: CodigoRazonCobroVisa): Observable<any> {
    return super.post(codigoRazonCobroVisa);
  }

  actualizar(codigoRazonCobroVisa: CodigoRazonCobroVisa): Observable<any> {
    return super.put(codigoRazonCobroVisa, codigoRazonCobroVisa.idCodigoRazon);
  }

  eliminar(codigoRazonCobroVisa: CodigoRazonCobroVisa): Observable<any> {
    return super.delete(codigoRazonCobroVisa.idCodigoRazon);
  }

  exportar() {
    return super.download(FILE_EXT.XLSX);
  }
}
