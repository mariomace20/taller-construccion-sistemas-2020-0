import { Injectable } from '@angular/core';
import { IncomingVisaTC5TCR5Service } from '../../../../consultas/service/incoming-visa-tc5-tcr5.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC5TCR5 from '../../actions/consultas/incoming-visa-tc5-tcr5.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC5TCR5Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC5TCR5Service: IncomingVisaTC5TCR5Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC5TCR5.actions.GET_DETALLE),
      switchMap((action: fromIncomingVisaTC5TCR5.GetDetalleTC5TCR5) => {
        return this.incomingVisaTC5TCR5Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC5TCR5.GetDetalleTC5TCR5Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC5TCR5.GetDetalleTC5TCR5Fail(err));
            })
          )
      })
    );


}
