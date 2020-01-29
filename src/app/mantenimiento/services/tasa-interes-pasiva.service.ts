import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/store/app.reducers';
import {Observable} from 'rxjs';
import {TasaInteresPasiva} from '../models';
import {FILE_EXT, getFormattedDateFromDDMMYYYYtoYYYYMMDD} from '../../shared/utils';
import {HttpService} from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class TasaInteresPasivaService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path: string;
    store.select('globalData')
         .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}tasas-interes-pasivas`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  buscar(fechaProceso: string): Observable<any> {
    return super.get(fechaProceso);
  }

  registrar(tasaInteresPasiva: TasaInteresPasiva): Observable<any> {
    return super.post(tasaInteresPasiva);
  }

  actualizar(tasaInteresPasiva: TasaInteresPasiva): Observable<any> {
    return super.put(tasaInteresPasiva, getFormattedDateFromDDMMYYYYtoYYYYMMDD(tasaInteresPasiva.fechaProceso));
  }

  eliminar(tasaInteresPasiva: TasaInteresPasiva): Observable<any> {
    return super.delete(getFormattedDateFromDDMMYYYYtoYYYYMMDD(tasaInteresPasiva.fechaProceso));
  }

  exportar() {
    return super.download(FILE_EXT.XLSX);
  }
}
