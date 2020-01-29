import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Servicio, Membresia } from '../models';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ServicioService extends HttpService {
  path: string;
  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path: string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}servicios`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}servicios`);
    return super.get();
  }

  registrar(servicio: Servicio) {
    super.setEndpoint(`${this.path}membresias`);
    return super.post(servicio, `${servicio.idMembresia}/servicios`);
  }

  actualizar(servicio: Servicio) {
    super.setEndpoint(`${this.path}membresias`);
    return super.put(servicio, `${servicio.idMembresia}/servicios/${servicio.idServicio}`);
  }

  eliminar(servicio: Servicio) {
    super.setEndpoint(`${this.path}membresias`);
    return super.delete(`${servicio.idMembresia}/servicios/${servicio.idServicio}`);
  }

  buscarPorMembresia(membresia: Membresia): Observable<any> {
    super.setEndpoint(`${this.path}membresias`);
    return super.get(`/${membresia.idMembresia}/servicios`);
  }

  exportar(){
    super.setEndpoint('servicios');
    return super.download(FILE_EXT.XLSX);
  }
}