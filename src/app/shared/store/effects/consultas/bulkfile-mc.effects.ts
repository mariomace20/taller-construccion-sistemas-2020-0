import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { BulkfileMcService } from '../../../../consultas/service/bulkfile-mc.service';
import * as fromBulkfileMc from '../../actions/consultas/bulkfile-mc.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class BulkfileMcEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private bulkfileMcService: BulkfileMcService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromBulkfileMc.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromBulkfileMc.GetBulkfileMcCriterio) => {
        return this.bulkfileMcService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromBulkfileMc.GetBulkfileMcCriterioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromBulkfileMc.GetBulkfileMcCriterioFail(err));
            })
          )
      })
    );

  @Effect()
  GetDetalle$ = this.actions$
    .pipe(
      ofType(fromBulkfileMc.actions.GET_DETALLE),
      switchMap((action: fromBulkfileMc.GetDetalleBulkfileMc) => {
        return this.bulkfileMcService.buscarDetalle(action.payload)
          .pipe(
            map(res => {
              return new fromBulkfileMc.GetDetalleBulkfileMcSuccess(res);
            }),
            catchError((err) => {
              return of(new fromBulkfileMc.GetDetalleBulkfileMcFail(err));
            })
          )
      })
    );


}
