import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { DistribucionFondo } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class DistribucionFondoService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}distribuciones-fondos`);
  }

  buscarTodos(): Observable<any>  {
    return super.get();
  }

  registrar(distribucionFondo: DistribucionFondo): Observable<any>  {
    return super.post(distribucionFondo);
  }

  actualizar(distribucionFondo: DistribucionFondo): Observable<any>  {
    return super.put(distribucionFondo, distribucionFondo.idDistribucionFondo);
  }

  eliminar(distribucionFondo: DistribucionFondo): Observable<any>  {
    return super.delete(distribucionFondo.idDistribucionFondo);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}