import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromSwdmplog from '../../actions/consultas/swdmplog.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SwdmplogService } from '../../../../consultas/service';

@Injectable()
export class SwdmplogEffects {

  constructor(
    private actions$: Actions,
    private swdmplogService: SwdmplogService
  ) { }

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromSwdmplog.actions.GET_CRITERIO_PAGINADO),
        switchMap((action: fromSwdmplog.GetSwdmplogCriterioPaginado) => {
          return this.swdmplogService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                return new fromSwdmplog.GetSwdmplogCriterioPaginadoSuccess(res);
              }),
              catchError((err) => {
                return of(new fromSwdmplog.GetSwdmplogCriterioPaginadoFail(err));
              })
            )
        })
      );

    @Effect()
    GetDetalle$ = this.actions$
      .pipe(
        ofType(fromSwdmplog.actions.GET_DETALLE),
        switchMap((action: fromSwdmplog.GetDetalleSwdmplog) => {
          return this.swdmplogService.buscarDetalle(action.payload)
            .pipe(
              map(res => {
                return new fromSwdmplog.GetDetalleSwdmplogSuccess(res);
              }),
              catchError((err) => {
                return of(new fromSwdmplog.GetDetalleSwdmplogFail(err));
              })
            )
        })
      );


}
