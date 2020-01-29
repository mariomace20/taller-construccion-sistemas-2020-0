import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { generarURLPeticionGet } from '../../shared/utils/http.util';
import { OrigenArchivo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrigenArchivoService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}origenes-archivos`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  buscarOrigenArchivoPorConciliacion(): Observable<any> {
    return super.get('/buscar',generarURLPeticionGet({'concilia' : 1 }));
  }

  registrar(origenArchivo: OrigenArchivo): Observable<any>{
    return super.post(origenArchivo);
  }

  actualizar(origenArchivo: OrigenArchivo): Observable<any> {
    return super.put(origenArchivo,origenArchivo.idOrigenArchivo);
  }

  eliminar(origenArchivo: OrigenArchivo) : Observable<any> {
    return super.delete(origenArchivo.idOrigenArchivo);
  }

}
