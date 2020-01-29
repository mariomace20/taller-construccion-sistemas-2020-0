import { Injectable } from '@angular/core';
import { IncomingVisaTC48TCR1Service } from '../../../../consultas/service/incoming-visa-tc48-tcr1.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC48TCR1 from '../../actions/consultas/incoming-visa-tc48-tcr1.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC48TCR1Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC48TCR1Service: IncomingVisaTC48TCR1Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC48TCR1.actions.GET_DETALLE),
      switchMap((action: fromIncomingVisaTC48TCR1.GetDetalleTC48TCR1) => {
        return this.incomingVisaTC48TCR1Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC48TCR1.GetDetalleTC48TCR1Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC48TCR1.GetDetalleTC48TCR1Fail(err));
            })
          )
      })
    );


}
