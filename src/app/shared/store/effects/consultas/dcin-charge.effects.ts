import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDcinCharge from '../../actions/consultas/dcin-charge.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { DcinChargeService } from '../../../../consultas/service';

@Injectable()
export class DcinChargeEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private dcinChargeService: DcinChargeService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromDcinCharge.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromDcinCharge.GetCriterioDcinCharge) => {
        return this.dcinChargeService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromDcinCharge.GetCriterioDcinChargeSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDcinCharge.GetCriterioDcinChargeFail(err));
            })
          )
      })
    );

  @Effect()
  GetDetalle$ = this.actions$
    .pipe(
      ofType(fromDcinCharge.actions.GET_DETALLE),
      switchMap((action: fromDcinCharge.GetDetalleDcinCharge) => {
        return this.dcinChargeService.buscarDetalle(action.payload)
          .pipe(
            map(res => {
              return new fromDcinCharge.GetDetalleDcinChargeSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDcinCharge.GetDetalleDcinChargeFail(err));
            })
          )
      })
    );

}
