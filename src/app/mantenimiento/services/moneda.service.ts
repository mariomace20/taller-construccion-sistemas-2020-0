import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedaService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}monedas`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }
}