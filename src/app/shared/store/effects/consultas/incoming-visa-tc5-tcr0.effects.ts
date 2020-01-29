import { Injectable } from '@angular/core';
import { IncomingVisaTC5TCR0Service } from '../../../../consultas/service/incoming-visa-tc5-tcr0.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC5TCR0 from '../../actions/consultas/incoming-visa-tc5-tcr0.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class IncomingVisaTC5TCR0Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC5TCR0Service: IncomingVisaTC5TCR0Service
  ) { }


    @Effect()
    GetXIdSecuencia$ = this.actions$
      .pipe(
        ofType(fromIncomingVisaTC5TCR0.actions.GET_DETALLE),
        switchMap((action: fromIncomingVisaTC5TCR0.GetDetalleTC5TCR0) => {
          return this.incomingVisaTC5TCR0Service.buscarPorIdSecuencia(action.payload)
            .pipe(
              map(res => {
                return new fromIncomingVisaTC5TCR0.GetDetalleTC5TCR0Success(res);
              }),
              catchError((err) => {
                return of(new fromIncomingVisaTC5TCR0.GetDetalleTC5TCR0Fail(err));
              })
            )
        })
      );


}
