import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { CodigoRptaMembresia } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils/file.util';

@Injectable({
  providedIn: 'root'
})
export class CodigoRptaMembresiaService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    super(injector, httpClient, `respuestas-marcas-int`);
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`respuestas-marcas-int`);
    return super.get();
  }

  buscarPorCriterios(idMembresia: string): Observable<any>  {
    super.setEndpoint(``);
    return super.get(`membresias/${idMembresia}/respuestas-marcas-int`);
  }

  registrar(codigoRptaMembresia: CodigoRptaMembresia): Observable<any> {
    super.setEndpoint(`membresias/${codigoRptaMembresia.idMembresia}/respuestas-marcas-int`);
    return super.post(codigoRptaMembresia);
  }

  actualizar(codigoRptaMembresia: CodigoRptaMembresia): Observable<any> {
    super.setEndpoint(`membresias/${codigoRptaMembresia.idMembresia}/respuestas-marcas-int`);
    return super.put(codigoRptaMembresia, codigoRptaMembresia.idRespuesta);
  }

  eliminar(codigoRptaMembresia: CodigoRptaMembresia): Observable<any> {
    super.setEndpoint(`membresias/${codigoRptaMembresia.idMembresia}/respuestas-marcas-int`);
    return super.delete(codigoRptaMembresia.idRespuesta);
  }

  exportar(){
    super.setEndpoint(`respuestas-marcas-int`);
    return super.download(FILE_EXT.XLSX);
  }
}
