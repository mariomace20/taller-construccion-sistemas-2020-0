import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GeneracionLogService } from '../../../../../procesos/services';
import * as fromGeneracionLog from '../../../actions/procesos/consultas/generacion-log.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GeneracionLogEffects {
  constructor(
    private actions$: Actions,
    private generacionLogService: GeneracionLogService
  ) {
  }

  @Effect()
  GetByCriteria$ = this.actions$
    .pipe(
      ofType(fromGeneracionLog.actions.GET_CRITERIO),
      switchMap((action: fromGeneracionLog.GetGeneracionLogCriterio) => {
        return this.generacionLogService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromGeneracionLog.GetGeneracionLogCriterioSuccess(res)
            }),
            catchError(err => of(new fromGeneracionLog.GetGeneracionLogCriterioFail(err)))
          )
      })
    )
}
