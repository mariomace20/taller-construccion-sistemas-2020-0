import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { DistribucionComision } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class DistribucionComisionService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}distribuciones-comisiones`);
  }

  buscarTodos(): Observable<any>  {
    return super.get();
  }

  registrar(distribucionComision: DistribucionComision): Observable<any>  {
    return super.post(distribucionComision);
  }

  actualizar(distribucionComision: DistribucionComision): Observable<any>  {
    return super.put(distribucionComision, distribucionComision.idDistribucionComision);
  }

  eliminar(distribucionComision: DistribucionComision): Observable<any>  {
    return super.delete(distribucionComision.idDistribucionComision);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }

}