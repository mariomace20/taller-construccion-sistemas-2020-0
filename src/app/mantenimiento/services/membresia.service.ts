import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Membresia } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}membresias`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(membresia: Membresia): Observable<any> {
    return super.post(membresia);
  }

  actualizar(membresia: Membresia): Observable<any> {
    return super.put(membresia,membresia.idMembresia);
  }

  eliminar(membresia: Membresia): Observable<any> {
    return super.delete(membresia.idMembresia);
  }
  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
