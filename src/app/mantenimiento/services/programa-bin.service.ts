import {Injectable, Injector} from '@angular/core';
import {HttpService} from '../../shared/services';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '../../shared/store/app.reducers';
import {Observable} from 'rxjs';
import {FILE_EXT} from '../../shared/utils';
import {ProgramaBin} from '../models';
import {Membresia, Producto} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProgramaBinService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}programas-bin`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  buscar(idMembresia: string, idProducto: number, idPrograma: number): Observable<any> {
    return super.get(`${idMembresia}/${idProducto}/${idPrograma}`);
  }

  buscarPorMembresiaYProducto(idMembresia: string, idProducto: number): Observable<any> {
    return super.get(`/${idMembresia}/${idProducto}`);
  }

  registrar(programaBin: ProgramaBin): Observable<any> {
    return super.post(programaBin);
  }

  actualizar(programaBin: ProgramaBin): Observable<any> {
    return super.put(programaBin, `${programaBin.idMembresia}/${programaBin.idProducto}/${programaBin.idPrograma}`);
  }

  eliminar(programaBin: ProgramaBin): Observable<any> {
    return super.delete(`${programaBin.idMembresia}/${programaBin.idProducto}/${programaBin.idPrograma}`);
  }

  exportar() {
    return super.download(FILE_EXT.XLSX);
  }
}
