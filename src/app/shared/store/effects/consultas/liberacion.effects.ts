import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { LiberacionService } from '../../../../consultas/service/liberacion.service';
import * as fromLiberacion from '../../actions/consultas/liberacion.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class LiberacionEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private liberacionService: LiberacionService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromLiberacion.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromLiberacion.GetLiberacionCriterio) => {
        return this.liberacionService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromLiberacion.GetLiberacionCriterioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromLiberacion.GetLiberacionCriterioFail(err));
            })
          )
      })
    );

}
