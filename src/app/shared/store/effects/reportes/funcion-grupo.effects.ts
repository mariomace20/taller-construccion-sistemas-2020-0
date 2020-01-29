import { Injectable } from '@angular/core';
import { FuncionGrupoService } from '../../../../reportes/user/services/funcion-grupo.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromFuncionGrupo from '../../actions/reportes/funcion-grupo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class FuncionGrupoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private funcionService: FuncionGrupoService
  ) {}

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromFuncionGrupo.actions.GET_ALL),
      switchMap(() => {
        return this.funcionService.buscarTodos()
          .pipe(
            map(res => {
              return new fromFuncionGrupo.GetAllFuncionesSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromFuncionGrupo.GetAllFuncionesFail(err));
            })
          )
      })
    );}