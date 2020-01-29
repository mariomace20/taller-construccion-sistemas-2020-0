import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { DistribucionVisaEventos } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class DistribucionVisaEventosService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}distribucionVisaEventos`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  actualizar(distribucionVisaEventos: DistribucionVisaEventos): Observable<any> {
    return super.put(distribucionVisaEventos, distribucionVisaEventos.secuenciaAgrupada);
  }

}
