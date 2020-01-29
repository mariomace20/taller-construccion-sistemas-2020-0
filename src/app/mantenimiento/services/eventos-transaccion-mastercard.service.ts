import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { EventosTransaccionMastercard } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class EventosTransaccionMastercardService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}eventos-transaccion-mastercard`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(eventosTransaccionMastercard: EventosTransaccionMastercard): Observable<any> {
    return super.post(eventosTransaccionMastercard);
  }

  actualizar(eventosTransaccionMastercard: EventosTransaccionMastercard): Observable<any> {
    return super.put(eventosTransaccionMastercard);
  }

  eliminar(eventosTransaccionMastercard: EventosTransaccionMastercard): Observable<any> {
    return super.deleteObject(eventosTransaccionMastercard);
  }

}
