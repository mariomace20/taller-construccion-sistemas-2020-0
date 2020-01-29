import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}paises`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(pais: Pais): Observable<any> {
    return super.post(pais);
  }

  actualizar(pais: Pais): Observable<any> {
    return super.put(pais, pais.idPais);
  }

  eliminar(pais: Pais): Observable<any> {
    return super.delete(pais.idPais);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
