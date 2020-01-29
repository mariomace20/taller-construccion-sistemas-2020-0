import { HttpService } from '../../shared';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolTransaccionService extends HttpService {

  constructor(injector: Injector, httpClient: HttpClient) {
    super(injector, httpClient, 'roles-transacciones');
  }

  buscarTodos(): Observable<any> {
    return super.get();
  }

}