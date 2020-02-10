import { Injectable } from '@angular/core';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsignacionEspaciosService } from '../services';

@Injectable()
export class AsignacionEspaciosFacade {

  constructor(
    private store: Store<AppState>,
    private service: AsignacionEspaciosService
  ){}

  buscarTodos(): Observable<any>{
    return this.service.buscarTodos();
  }

}
