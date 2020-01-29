import { Injectable, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { AtmRedUnicard } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class AtmRedUnicardService extends HttpService {

  constructor(
    injector: Injector, 
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path:string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}atms-redes-unicard`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }
  registrar(atmRedUnicard: AtmRedUnicard): Observable<any> {

    atmRedUnicard.tipo=1;
        return super.post(atmRedUnicard);
  }

  actualizar(atmRedUnicard: AtmRedUnicard): Observable<any> {
    atmRedUnicard.tipo=1;
    return super.put(atmRedUnicard, atmRedUnicard.idATM);
  }

  eliminar(atmRedUnicard: AtmRedUnicard): Observable<any> {
    atmRedUnicard.tipo=1;
    return super.delete(atmRedUnicard.idATM);
  }

  exportar(){
    super.setEndpoint(`atms-redes-unicard`);
    return super.download(FILE_EXT.XLSX);
  }
}
