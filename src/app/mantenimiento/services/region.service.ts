import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Region } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}regiones`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(region: Region): Observable<any> {
    return super.post(region);
  }

  actualizar(region: Region): Observable<any> {
    return super.put(region, region.idRegion);
  }

  eliminar(region: Region): Observable<any> {
    return super.delete(region.idRegion);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
