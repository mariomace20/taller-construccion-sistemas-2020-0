import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { EventosInstitucionVisa } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class EventosInstitucionVisaService extends HttpService {
  path: string;
  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}eventos-institucion-visa`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-visa`);
    return super.get();
  }

  buscarPorInstitucion(obj : any): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-visa`);
    return super.get(`/${obj.idInstitucion}`);
  }

  registrar(eventosInstitucionVisa: EventosInstitucionVisa): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-visa`);
    return super.post(eventosInstitucionVisa);
  }

  actualizar(eventosInstitucionVisa: EventosInstitucionVisa): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-visa`);
    return super.put(eventosInstitucionVisa);
  }

  eliminar(eventosInstitucionVisa: EventosInstitucionVisa): Observable<any> {
    super.setEndpoint(`${this.path}eventos-institucion-visa`);
    return super.deleteObject(eventosInstitucionVisa);
  }

}
