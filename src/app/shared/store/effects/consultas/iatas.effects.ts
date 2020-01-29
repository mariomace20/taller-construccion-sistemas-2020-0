import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIatas from '../../actions/consultas/iatas.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { IatasService } from '../../../../consultas/service';

@Injectable()
export class IatasEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private iatas: IatasService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIatas.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIatas.GetCriterioIatas) => {
        return this.iatas.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromIatas.GetCriterioIatasSuccess(res);
            }),
            catchError((err) => {
              return of(new fromIatas.GetCriterioIatasFail(err));
            })
          )
      })
    );

}
