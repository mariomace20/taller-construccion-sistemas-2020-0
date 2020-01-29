import { Injectable } from '@angular/core';
import { IncomingVisaTC5TCR1Service } from '../../../../consultas/service/incoming-visa-tc5-tcr1.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC5TCR1 from '../../actions/consultas/incoming-visa-tc5-tcr1.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC5TCR1Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC5TCR1Service: IncomingVisaTC5TCR1Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC5TCR1.actions.GET_DETALLE),
      switchMap((action: fromIncomingVisaTC5TCR1.GetDetalleTC5TCR1) => {
        return this.incomingVisaTC5TCR1Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC5TCR1.GetDetalleTC5TCR1Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC5TCR1.GetDetalleTC5TCR1Fail(err));
            })
          )
      })
    );


}
