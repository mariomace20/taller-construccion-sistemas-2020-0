import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndicadorCorreoTelefono } from '../models';
import { Observable } from 'rxjs';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class IndicadorCorreoTelefonoService extends HttpService {

  constructor(injector: Injector, httpClient: HttpClient) {
    super(injector, httpClient, 'correos-telefonos');
  }

  buscarTodos(): Observable<any> {
    super.setEndpoint('correos-telefonos');
    return super.get();
  }
  buscarPorMembresias(membresias : any): Observable<any> {
    let httpParams = super.getHttpParamsFromCriteria(membresias);
    return super.get('',httpParams);
  }
  registrar(indicadorCorreoTelefono: IndicadorCorreoTelefono): Observable<any> {
    super.setEndpoint('membresias');
    return super.post(indicadorCorreoTelefono, `${indicadorCorreoTelefono.idMembresia}/correos-telefonos`);
  }

  actualizar(indicadorCorreoTelefono: IndicadorCorreoTelefono): Observable<any> {
    super.setEndpoint('membresias');
    return super.put(indicadorCorreoTelefono, `${indicadorCorreoTelefono.idMembresia}/correos-telefonos/${indicadorCorreoTelefono.idCorreoTelefono}`);
  }

  eliminar(indicadorCorreoTelefono: IndicadorCorreoTelefono): Observable<any> {
    super.setEndpoint('membresias');
    return super.delete(`${indicadorCorreoTelefono.idMembresia}/correos-telefonos/${indicadorCorreoTelefono.idCorreoTelefono}`);
  }

  exportar() {
    return super.download(FILE_EXT.XLSX);
  }
}
