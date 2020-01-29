import { Injectable } from '@angular/core';
import { IncomingVisaTC5Service } from '../../../../consultas/service/incoming-visa-tc5.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC5 from '../../actions/consultas/incoming-visa-tc5.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class IncomingVisaTC5Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC5Service: IncomingVisaTC5Service
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC5.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIncomingVisaTC5.GetCriterioTC5) => {
        return this.incomingVisaTC5Service.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC5.GetCriterioTC5Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC5.GetCriterioTC5Fail(err));
            })
          )
      })
    );

}
