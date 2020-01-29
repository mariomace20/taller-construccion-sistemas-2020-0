import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LiberacionMarca, Membresia } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LiberacionMarcaService extends HttpService {
  path: string;
  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path: string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}liberaciones-marcas`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}liberaciones-marcas`);
    return super.get();
  }

  registrar(liberacionMarca: LiberacionMarca) {
    super.setEndpoint(`${this.path}membresias`);
    return super.post(liberacionMarca, `${liberacionMarca.idMembresia}/productos/${liberacionMarca.idProducto}/procesos/${liberacionMarca.idProceso}/liberaciones-marcas`);
  }

  actualizar(liberacionMarca: LiberacionMarca) {
    super.setEndpoint(`${this.path}membresias`);
    return super.put(liberacionMarca, `${liberacionMarca.idMembresia}/productos/${liberacionMarca.idProducto}/procesos/${liberacionMarca.idProceso}/liberaciones-marcas`);
  }

  eliminar(liberacionMarca: LiberacionMarca) {
    super.setEndpoint(`${this.path}membresias`);
    return super.delete(`${liberacionMarca.idMembresia}/productos/${liberacionMarca.idProducto}/procesos/${liberacionMarca.idProceso}/liberaciones-marcas`);
  }

  buscarPorMembresia(membresia: Membresia): Observable<any> {
    super.setEndpoint(`${this.path}membresias`);
    return super.get(`/${membresia.idMembresia}/liberaciones-marcas`);
  }

}
