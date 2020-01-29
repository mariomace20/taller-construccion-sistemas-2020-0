import { Injectable } from '@angular/core';
import { RangoBinMCService } from '../../../../consultas/service/rango-bin-mc.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRangoBinMC from '../../actions/consultas/rango-bin-mc.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RangoBinMCEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private rangoBinMCService: RangoBinMCService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromRangoBinMC.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromRangoBinMC.GetCriterioRangoBinMC) => {
        return this.rangoBinMCService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromRangoBinMC.GetCriterioRangoBinMCSuccess(res);
            }),
            catchError((err) => {
              return of(new fromRangoBinMC.GetCriterioRangoBinMCFail(err));
            })
          )
      })
    );

}
