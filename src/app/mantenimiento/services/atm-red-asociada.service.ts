import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { AtmRedAsociada } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class AtmRedAsociadaService extends HttpService {
path:string;
  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}atms-redes-asociadas`);
    this.path = path;
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint(`${this.path}atms-redes-asociadas`);
    return super.get();
  }

  registrar(atmRedAsociada: AtmRedAsociada): Observable<any> {
    atmRedAsociada.tipo=2;
    super.setEndpoint(`${this.path}instituciones`);
    return super.post(atmRedAsociada,`${atmRedAsociada.idInstitucion}/atms-redes-asociadas`);
  }

  actualizar(atmRedAsociada: AtmRedAsociada): Observable<any> {
    atmRedAsociada.tipo=2;
    super.setEndpoint(`${this.path}instituciones`);
    return super.put(atmRedAsociada, `${atmRedAsociada.idInstitucion}/atms-redes-asociadas/${atmRedAsociada.idATM}`);

  }

  eliminar(atmRedAsociada: AtmRedAsociada): Observable<any> {
    atmRedAsociada.tipo=2;
    super.setEndpoint(`${this.path}instituciones`);
    return super.delete(`${atmRedAsociada.idInstitucion}/atms-redes-asociadas/${atmRedAsociada.idATM}`);
  }

  exportar(){
    super.setEndpoint(`${this.path}atms-redes-asociadas`);
    return super.download(FILE_EXT.XLSX);
  }
}
