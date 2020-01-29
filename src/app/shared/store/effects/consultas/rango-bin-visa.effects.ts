import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRangoBinVisa from '../../actions/consultas/rango-bin-visa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { sortByAttr } from '../../../utils';
import { RangoBinVisaService } from '../../../../consultas/service';

@Injectable()
export class RangoBinVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private rangoBinVisaService: RangoBinVisaService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromRangoBinVisa.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromRangoBinVisa.GetCriterioRangoBinVisa) => {
        return this.rangoBinVisaService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromRangoBinVisa.GetCriterioRangoBinVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromRangoBinVisa.GetCriterioRangoBinVisaFail(err));
            })
          )
      })
    );

}
