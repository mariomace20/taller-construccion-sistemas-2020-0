import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDcioutCharge from '../../actions/consultas/dciout-charge.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { DcioutChargeService } from '../../../../consultas/service';

@Injectable()
export class DcioutChargeEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private dcioutChargeService: DcioutChargeService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromDcioutCharge.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromDcioutCharge.GetCriterioDcioutCharge) => {
        return this.dcioutChargeService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromDcioutCharge.GetCriterioDcioutChargeSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDcioutCharge.GetCriterioDcioutChargeFail(err));
            })
          )
      })
    );

  @Effect()
  GetDetalle$ = this.actions$
    .pipe(
      ofType(fromDcioutCharge.actions.GET_DETALLE),
      switchMap((action: fromDcioutCharge.GetDetalleDcioutCharge) => {
        return this.dcioutChargeService.buscarDetalle(action.payload)
          .pipe(
            map(res => {
              return new fromDcioutCharge.GetDetalleDcioutChargeSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDcioutCharge.GetDetalleDcioutChargeFail(err));
            })
          )
      })
    );

}
