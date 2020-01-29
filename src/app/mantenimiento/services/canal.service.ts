import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Canal } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class CanalService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}canales`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(canal: Canal): Observable<any> {
    return super.post(canal);
  }

  actualizar(canal: Canal): Observable<any> {
    return super.put(canal, canal.idCanal);
  }

  eliminar(canal: Canal): Observable<any> {
    return super.delete(canal.idCanal);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
