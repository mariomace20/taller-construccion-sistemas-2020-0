import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { IndLimitePiso } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class IndLimitePisoService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}inds-limites-pisos`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(indLimitePiso: IndLimitePiso): Observable<any> {
    return super.post(indLimitePiso);
  }

  actualizar(indLimitePiso: IndLimitePiso): Observable<any> {
    return super.put(indLimitePiso, indLimitePiso.idLimitePiso);
  }

  eliminar(indLimitePiso: IndLimitePiso): Observable<any> {
    return super.delete(indLimitePiso.idLimitePiso);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
