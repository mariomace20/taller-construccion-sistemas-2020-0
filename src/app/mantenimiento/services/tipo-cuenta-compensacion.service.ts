import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { TipoCuentaCompensacion } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TipoCuentaCompensacionService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}tipos-cuentas-compensaciones`);
  }

  buscarTodos(): Observable<any>  {
    return super.get();
  }

  registrar(origen: TipoCuentaCompensacion): Observable<any>  {
    return super.post(origen);
  }

  actualizar(origen: TipoCuentaCompensacion): Observable<any>  {
    return super.put(origen, origen.idTipoCuentaComp);
  }

  eliminar(origen: TipoCuentaCompensacion): Observable<any>  {
    return super.delete(origen.idTipoCuentaComp);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }

}
