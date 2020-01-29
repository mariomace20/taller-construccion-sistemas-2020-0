import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModoEntradaPos } from '../models';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ModoEntradaPosService extends HttpService {

  path:string;

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}modos-entradas-pos`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}modos-entradas-pos`);
    return super.get();
  }
  buscarPorMembresias(idMembresia : string): Observable<any> {
    super.setEndpoint(`membresias/${idMembresia}/modos-entradas-pos`);
    return super.get();
  }
  registrar(modoEntradaPos: ModoEntradaPos): Observable<any>  {
    super.setEndpoint(`${this.path}membresias`);
    return super.post(modoEntradaPos,`${modoEntradaPos.idMembresia}/modos-entradas-pos`);
  }

  actualizar(modoEntradaPos: ModoEntradaPos): Observable<any>  {
    super.setEndpoint(`${this.path}membresias`);
    return super.put(modoEntradaPos,`${modoEntradaPos.idMembresia}/modos-entradas-pos/${modoEntradaPos.idModoEntradaPOS}`);
  }

  eliminar(modoEntradaPos: ModoEntradaPos): Observable<any>  {
    super.setEndpoint(`${this.path}membresias`);
    return super.delete(`${modoEntradaPos.idMembresia}/modos-entradas-pos/${modoEntradaPos.idModoEntradaPOS}`);
  }

  exportar(){
    super.setEndpoint('modos-entradas-pos');
    return super.download(FILE_EXT.XLSX);
  }
}
