import { Injectable, ɵConsole, Injector } from '@angular/core';
import { HttpService } from '../../shared';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.reducers';
import { FILE_EXT } from '../../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends HttpService {

  constructor(
    injector: Injector,
    httpClient: HttpClient,
    store: Store<AppState>
  ) {
    let path: string;
    store.select('globalData')
      .subscribe(data => path = data.pathEndpoints.MANT_COMPENSACION);
    super(injector, httpClient, `${path}productos`);
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

  registrar(producto: Producto): Observable<any> {
    return super.post(producto);
  }

  actualizar(producto: Producto): Observable<any> {
    return super.put(producto, producto.idProducto);
  }

  eliminar(producto: Producto): Observable<any> {
    return super.delete(producto.idProducto);
  }

  exportar() {
    return super.download(FILE_EXT.XLSX);
  }
}
