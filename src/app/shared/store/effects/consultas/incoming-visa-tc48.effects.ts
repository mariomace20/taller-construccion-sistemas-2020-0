import { Injectable } from '@angular/core';
import { IncomingVisaTC48Service } from '../../../../consultas/service/incoming-visa-tc48.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC48 from '../../actions/consultas/incoming-visa-tc48.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class IncomingVisaTC48Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC48Service: IncomingVisaTC48Service
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC48.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIncomingVisaTC48.GetCriterioTC48) => {
        return this.incomingVisaTC48Service.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC48.GetCriterioTC48Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC48.GetCriterioTC48Fail(err));
            })
          )
      })
    );

}
