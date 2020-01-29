import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LogControlProgramaService } from '../../../../../procesos/services';
import * as fromLogControlPrograma from '../../../actions/procesos/consultas/log-control.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LogControlProgramaEffects {
  constructor(private actions$: Actions, private logControlProgramaService: LogControlProgramaService) { }

  @Effect()
  GetByCriteria$ = this.actions$
    .pipe(
      ofType(fromLogControlPrograma.actions.GET_CRITERIO),
      switchMap((action: fromLogControlPrograma.GetLogControlProgramaCriterio) => {
        return this.logControlProgramaService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromLogControlPrograma.GetLogControlProgramaCriterioSuccess(res)
            }),
            catchError(err => of(new fromLogControlPrograma.GetLogControlProgramaCriterioFail(err)))
          )
      })
    )
}