import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoTerminalPos } from '../models';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TipoTerminalPosService extends HttpService {

  path:string;

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>) {
      let path;
      store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
      super(injector, httpClient, `${path}capacidades-terminales-pos`);
      this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}capacidades-terminales-pos`);
    return super.get();
  }
  buscarPorMembresias(idMembresia : string): Observable<any> {
    super.setEndpoint(`membresias/${idMembresia}/capacidades-terminales-pos`);
    return super.get();
  }
  registrar(tipoTerminalPos: TipoTerminalPos): Observable<any> {
    super.setEndpoint(`${this.path}membresias`);
    return super.post(tipoTerminalPos, `${tipoTerminalPos.idMembresia}/capacidades-terminales-pos`);
  }

  actualizar(tipoTerminalPos: TipoTerminalPos): Observable<any> {
    super.setEndpoint(`${this.path}membresias`);
    return super.put(tipoTerminalPos, `${tipoTerminalPos.idMembresia}/capacidades-terminales-pos/${tipoTerminalPos.idTerminalPOS}`);
  }

  eliminar(tipoTerminalPos: TipoTerminalPos): Observable<any> {
    super.setEndpoint(`${this.path}membresias`);
    return super.delete(`${tipoTerminalPos.idMembresia}/capacidades-terminales-pos/${tipoTerminalPos.idTerminalPOS}`);
  }

  exportar() {
    return super.download(FILE_EXT.XLSX);
  }
}
