import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { MetodoIdThb } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class MetodoIdThbService extends HttpService {

  path:string;

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}metodos-id-thb`);
    this.path = path;
  }

  buscarTodos(): Observable<any>  {
    super.setEndpoint(`${this.path}metodos-id-thb`);
    return super.get();
  }
  buscarPorMembresias(idMembresia : string): Observable<any> {
    super.setEndpoint(`membresias/${idMembresia}/metodos-id-thb`);
    return super.get();
  }

  registrar(metodoIdThb: MetodoIdThb): Observable<any>  {
    super.setEndpoint(`${this.path}membresias`);
    return super.post(metodoIdThb, `${metodoIdThb.idMembresia}/metodos-id-thb`);
  }

  actualizar(metodoIdThb: MetodoIdThb): Observable<any>  {
    super.setEndpoint(`${this.path}membresias`);
    return super.put(metodoIdThb, `${metodoIdThb.idMembresia}/metodos-id-thb/${metodoIdThb.idMetodoIdThb}`);
  }

  eliminar(metodoIdThb: MetodoIdThb): Observable<any>  {
    super.setEndpoint(`${this.path}membresias`);
    return super.delete(`${metodoIdThb.idMembresia}/metodos-id-thb/${metodoIdThb.idMetodoIdThb}`);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }

}
