import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { EventosInstitucionMastercard } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class EventosInstitucionMastercardService extends HttpService {
  path: string;
  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}eventos-institucion-mastercard`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-mastercard`);
    return super.get();
  }

  buscarPorInstitucion(obj : any): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-mastercard`);
    return super.get(`/${obj.idInstitucion}`);
  }

  registrar(eventosInstitucionMastercard: EventosInstitucionMastercard): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-mastercard`);
    return super.post(eventosInstitucionMastercard);
  }

  actualizar(eventosInstitucionMastercard: EventosInstitucionMastercard): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-mastercard`);
    return super.put(eventosInstitucionMastercard);
  }

  eliminar(eventosInstitucionMastercard: EventosInstitucionMastercard): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-mastercard`);
    return super.deleteObject(eventosInstitucionMastercard);
  }

}
