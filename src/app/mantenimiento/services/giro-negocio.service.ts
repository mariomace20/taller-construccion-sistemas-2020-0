import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GiroNegocio } from '../models';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class GiroNegocioService extends HttpService {

  path:string;

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `giros-negocio`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}giros-negocio`);
    return super.get();
  }

  buscarPorMembresias(membresias : any): Observable<any> {
    return super.get(`/${membresias}`);
  }

}
