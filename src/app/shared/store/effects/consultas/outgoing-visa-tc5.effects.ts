import { Injectable } from '@angular/core';
import { OutgoingVisaTC5Service } from '../../../../consultas/service/outgoing-visa-tc5.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOutgoingVisaTC5 from '../../actions/consultas/outgoing-visa-tc5.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class OutgoingVisaTC5Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private outgoingVisaTC5Service: OutgoingVisaTC5Service
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromOutgoingVisaTC5.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromOutgoingVisaTC5.GetCriterioTC5) => {
        return this.outgoingVisaTC5Service.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromOutgoingVisaTC5.GetCriterioTC5Success(res);
            }),
            catchError((err) => {
              return of(new fromOutgoingVisaTC5.GetCriterioTC5Fail(err));
            })
          )
      })
    );

}
