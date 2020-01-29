import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromBinVisa from '../../actions/consultas/bin-visa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { BinVisaService } from '../../../../consultas/service';

@Injectable()
export class BinVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private binVisaService: BinVisaService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromBinVisa.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromBinVisa.GetCriterioBinVisa) => {
        return this.binVisaService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromBinVisa.GetCriterioBinVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromBinVisa.GetCriterioBinVisaFail(err));
            })
          )
      })
    );

}
