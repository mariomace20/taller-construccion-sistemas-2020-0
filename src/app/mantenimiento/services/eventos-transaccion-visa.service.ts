import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { EventosTransaccionVisa } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class EventosTransaccionVisaService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}eventos-transaccion-visa`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(eventosTransaccionVisa: EventosTransaccionVisa): Observable<any> {
    return super.post(eventosTransaccionVisa);
  }

  actualizar(eventosTransaccionVisa: EventosTransaccionVisa): Observable<any> {
    return super.put(eventosTransaccionVisa);
  }

  eliminar(eventosTransaccionVisa: EventosTransaccionVisa): Observable<any> {
    return super.deleteObject(eventosTransaccionVisa);
  }

}
