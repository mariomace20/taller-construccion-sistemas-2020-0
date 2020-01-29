import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { IpmMcService } from '../../../../consultas/service/ipm-mc.service';
import * as fromIpmMc from '../../actions/consultas/ipm-mc.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class IpmMcEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private ipmMcService: IpmMcService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIpmMc.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIpmMc.GetIpmMcCriterio) => {
        return this.ipmMcService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromIpmMc.GetIpmMcCriterioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromIpmMc.GetIpmMcCriterioFail(err));
            })
          )
      })
    );

  @Effect()
  GetDetalle$ = this.actions$
    .pipe(
      ofType(fromIpmMc.actions.GET_DETALLE),
      switchMap((action: fromIpmMc.GetDetalleIpmMc) => {
        return this.ipmMcService.buscarDetalle(action.payload)
          .pipe(
            map(res => {
              return new fromIpmMc.GetDetalleIpmMcSuccess(res);
            }),
            catchError((err) => {
              return of(new fromIpmMc.GetDetalleIpmMcFail(err));
            })
          )
      })
    );


}
