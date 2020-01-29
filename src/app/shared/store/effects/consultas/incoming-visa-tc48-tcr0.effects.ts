import { Injectable } from '@angular/core';
import { IncomingVisaTC48TCR0Service } from '../../../../consultas/service/incoming-visa-tc48-tcr0.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC48TCR0 from '../../actions/consultas/incoming-visa-tc48-tcr0.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC48TCR0Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC48TCR0Service: IncomingVisaTC48TCR0Service
  ) { }

    @Effect()
    GetXIdSecuencia$ = this.actions$
      .pipe(
        ofType(fromIncomingVisaTC48TCR0.actions.GET_DETALLE),
        switchMap((action: fromIncomingVisaTC48TCR0.GetDetalleTC48TCR0) => {
          return this.incomingVisaTC48TCR0Service.buscarPorIdSecuencia(action.payload)
            .pipe(
              map(res => {
                return new fromIncomingVisaTC48TCR0.GetDetalleTC48TCR0Success(res);
              }),
              catchError((err) => {
                return of(new fromIncomingVisaTC48TCR0.GetDetalleTC48TCR0Fail(err));
              })
            )
        })
      );


}
