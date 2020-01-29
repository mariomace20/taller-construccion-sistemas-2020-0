import { Injectable } from '@angular/core';
import { OutgoingVisaTC5TCR1Service } from '../../../../consultas/service/outgoing-visa-tc5-tcr1.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOutgoingVisaTC5TCR1 from '../../actions/consultas/outgoing-visa-tc5-tcr1.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OutgoingVisaTC5TCR1Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private outgoingVisaTC5TCR1Service: OutgoingVisaTC5TCR1Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromOutgoingVisaTC5TCR1.actions.GET_DETALLE),
      switchMap((action: fromOutgoingVisaTC5TCR1.GetDetalleTC5TCR1) => {
        return this.outgoingVisaTC5TCR1Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromOutgoingVisaTC5TCR1.GetDetalleTC5TCR1Success(res);
            }),
            catchError((err) => {
              return of(new fromOutgoingVisaTC5TCR1.GetDetalleTC5TCR1Fail(err));
            })
          )
      })
    );


}
