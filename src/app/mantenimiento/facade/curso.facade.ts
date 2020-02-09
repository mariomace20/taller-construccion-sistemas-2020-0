import { Injectable } from '@angular/core';
import { AppState } from '../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CursoService } from '../services';

@Injectable()
export class CursoFacade {

  constructor(
    private store: Store<AppState>,
    private cursoService: CursoService
  ){}

  buscarTodos(): Observable<any>{
    return this.cursoService.buscarTodos();
  }

  cargar(files: File[]): Observable<any>{
    return this.cursoService.cargarCursos(files);
  }

}
