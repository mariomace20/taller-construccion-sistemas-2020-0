import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { Institucion } from '../models';
import { CriterioInstitucion } from '../models/criterios';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';
import { generarURLPeticionGet } from '../../shared/utils/http.util';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path;
    store.select('globalData').subscribe(data => path = data.pathEndpoints.MANT_GENERAL);
    super(injector, httpClient, `${path}instituciones`);
  }

  buscarTodos(): Observable<any>  {
    return super.get();
  }

  buscarInstitucionesUba(): Observable<any>  {
    return super.get('/buscar',generarURLPeticionGet({'idInstitucionOperador' :99 , 'operador' : 'LIKE' }));
  }

  buscarInstitucionesNoUba(): Observable< any>  {
    return super.get('/buscar',generarURLPeticionGet({'idInstitucionOperador' :99 , 'operador' : 'NOT LIKE' }));
  }


  registrar(institucion: Institucion): Observable<any>  {
    console.log('SERVICE registrar institucion');
    console.log(institucion);
    return super.post(institucion);
  }

  actualizar(institucion: Institucion): Observable<any>  {
    console.log('SERVICE actualizar institucion');
    console.log(institucion);
    return super.put(institucion, institucion.idInstitucion);
  }

  eliminar(institucion: Institucion): Observable<any>  {
    return super.delete(institucion.idInstitucion);
  }

  exportar(){
    return super.download(FILE_EXT.XLSX);
  }
}
