import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { ParametroSistema } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametroSistemaService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}parametros-sistema`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  actualizar(parametroSistema: ParametroSistema): Observable<any> {
    return super.put(parametroSistema);
  }
}