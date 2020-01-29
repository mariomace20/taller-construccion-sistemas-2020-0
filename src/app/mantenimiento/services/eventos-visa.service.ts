import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class EventosVisaService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_MARCA_INT);
    super(injector, httpClient, `${path}eventos-visa`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  buscarEventosSinTxn(): Observable<any> {
    return super.get('/sinTxn');
  }

  buscarIdDescripcion(): Observable<any> {
    return super.get('/idDescripcion');
  }

}
