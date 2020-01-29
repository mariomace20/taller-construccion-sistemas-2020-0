import { Injectable } from '@angular/core';
import { IncomingVisaTC5TCR4Service } from '../../../../consultas/service/incoming-visa-tc5-tcr4.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC5TCR4 from '../../actions/consultas/incoming-visa-tc5-tcr4.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC5TCR4Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC5TCR4Service: IncomingVisaTC5TCR4Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC5TCR4.actions.GET_DETALLE),
      switchMap((action: fromIncomingVisaTC5TCR4.GetDetalleTC5TCR4) => {
        return this.incomingVisaTC5TCR4Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC5TCR4.GetDetalleTC5TCR4Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC5TCR4.GetDetalleTC5TCR4Fail(err));
            })
          )
      })
    );


}
