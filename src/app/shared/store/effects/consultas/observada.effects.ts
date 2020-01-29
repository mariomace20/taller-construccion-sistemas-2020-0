import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ObservadaService } from '../../../../consultas/service/observada.service';
import * as fromObservada from '../../actions/consultas/observada.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class ObservadaEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private observadaService: ObservadaService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromObservada.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromObservada.GetObservadaCriterio) => {
        return this.observadaService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromObservada.GetObservadaCriterioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromObservada.GetObservadaCriterioFail(err));
            })
          )
      })
    );

  @Effect()
  GetDetalle$ = this.actions$
    .pipe(
      ofType(fromObservada.actions.GET_DETALLE),
      switchMap((action: fromObservada.GetDetalleObservada) => {
        return this.observadaService.buscarDetalle(action.payload)
          .pipe(
            map(res => {
              return new fromObservada.GetDetalleObservadaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromObservada.GetDetalleObservadaFail(err));
            })
          )
      })
    );


}
