import { Injectable } from '@angular/core';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HorarioService } from '../services';

@Injectable()
export class ProgramacionAcademicaFacade {

  constructor(
    private store: Store<AppState>,
    private cursoService: HorarioService
  ){}

  buscarTodos(): Observable<any>{
    return this.cursoService.buscarTodos();
  }

  cargar(files: File[]): Observable<any>{
    return this.cursoService.cargar(files);
  }

}
