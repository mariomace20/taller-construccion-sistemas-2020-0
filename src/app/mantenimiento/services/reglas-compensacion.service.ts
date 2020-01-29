import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReglasCompensacion } from '../models/reglas-compensacion.model'
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglasCompensacionService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}reglas-compensacion`);
  }

  buscarTodos(): Observable<any>  {
    return super.get();
  }

  registrar(reglasCompensacion: ReglasCompensacion): Observable<any> {
    return super.post(reglasCompensacion);
  }

  actualizar(reglasCompensacion: ReglasCompensacion): Observable<any> {
    return super.put(reglasCompensacion);
  }

  eliminar(reglasCompensacion: ReglasCompensacion): Observable<any> {
    return super.deleteObject(reglasCompensacion);
  }
}
