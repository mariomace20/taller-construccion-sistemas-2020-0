import { Injectable } from '@angular/core';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlanAcademicoService } from '../services';

@Injectable()
export class PlanAcademicoFacade {

  constructor(
    private store: Store<AppState>,
    private cursoService: PlanAcademicoService
  ){}

  buscarTodos(): Observable<any>{
    return this.cursoService.buscarTodos();
  }

  cargar(files: File[]): Observable<any>{
    return this.cursoService.cargar(files);
  }

}
