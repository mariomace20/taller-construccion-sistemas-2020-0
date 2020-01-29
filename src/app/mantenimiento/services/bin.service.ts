import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Bin } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class BinService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}bins`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  buscarPorInstituciones(bins : any): Observable<any> {
    /*Ejemplo : http://localhost:8080/sicf/api/bins/buscar?idsInstitucion=24&idsInstitucion=12 */
    let httpParams = super.getHttpParamsFromCriteria(bins);
    return super.get('',httpParams);
  }

  registrar(bin: Bin): Observable<any> {
    return super.post(bin);
  }

  actualizar(bin: Bin): Observable<any> {
    return super.put(bin, bin.idBIN);
  }

  eliminar(bin: Bin): Observable<any> {
    return super.delete(bin.idBIN);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
