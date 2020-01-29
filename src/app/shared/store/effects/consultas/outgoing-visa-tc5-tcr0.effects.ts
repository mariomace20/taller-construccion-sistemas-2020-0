import { Injectable } from '@angular/core';
import { OutgoingVisaTC5TCR0Service } from '../../../../consultas/service/outgoing-visa-tc5-tcr0.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOutgoingVisaTC5TCR0 from '../../actions/consultas/outgoing-visa-tc5-tcr0.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class OutgoingVisaTC5TCR0Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private outgoingVisaTC5TCR0Service: OutgoingVisaTC5TCR0Service
  ) { }


    @Effect()
    GetXIdSecuencia$ = this.actions$
      .pipe(
        ofType(fromOutgoingVisaTC5TCR0.actions.GET_DETALLE),
        switchMap((action: fromOutgoingVisaTC5TCR0.GetDetalleTC5TCR0) => {
          return this.outgoingVisaTC5TCR0Service.buscarPorIdSecuencia(action.payload)
            .pipe(
              map(res => {
                return new fromOutgoingVisaTC5TCR0.GetDetalleTC5TCR0Success(res);
              }),
              catchError((err) => {
                return of(new fromOutgoingVisaTC5TCR0.GetDetalleTC5TCR0Fail(err));
              })
            )
        })
      );


}
