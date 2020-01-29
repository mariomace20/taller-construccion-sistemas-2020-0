import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIata from '../../actions/consultas/iata.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { IataService } from '../../../../consultas/service';

@Injectable()
export class IataEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private dcinChargeService: IataService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIata.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIata.GetCriterioIata) => {
        return this.dcinChargeService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromIata.GetCriterioIataSuccess(res);
            }),
            catchError((err) => {
              return of(new fromIata.GetCriterioIataFail(err));
            })
          )
      })
    );

}
