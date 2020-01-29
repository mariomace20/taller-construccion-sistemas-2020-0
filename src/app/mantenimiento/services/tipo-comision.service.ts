import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { TipoComision } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TipoComisionService extends HttpService {
  path: string;
  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}tipos-comisiones`);
    this.path = path;
  }

  buscarTodos(): Observable<any>  {
    return super.get();
  }

  buscarPorId(idTipoComision: number): Observable<any>  {
    super.setEndpoint(`${this.path}tipos-comisiones`);
    return super.get(`/${idTipoComision}`);
  }

  registrar(origen: TipoComision): Observable<any>  {
    return super.post(origen);
  }

  actualizar(origen: TipoComision): Observable<any>  {
    return super.put(origen, origen.idTipoComision);
  }

  eliminar(origen: TipoComision): Observable<any>  {
    return super.delete(origen.idTipoComision);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }

}
