import { Injectable } from '@angular/core';
import { OutgoingVisaTC5TCR5Service } from '../../../../consultas/service/outgoing-visa-tc5-tcr5.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOutgoingVisaTC5TCR5 from '../../actions/consultas/outgoing-visa-tc5-tcr5.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OutgoingVisaTC5TCR5Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private outgoingVisaTC5TCR5Service: OutgoingVisaTC5TCR5Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromOutgoingVisaTC5TCR5.actions.GET_DETALLE),
      switchMap((action: fromOutgoingVisaTC5TCR5.GetDetalleTC5TCR5) => {
        return this.outgoingVisaTC5TCR5Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromOutgoingVisaTC5TCR5.GetDetalleTC5TCR5Success(res);
            }),
            catchError((err) => {
              return of(new fromOutgoingVisaTC5TCR5.GetDetalleTC5TCR5Fail(err));
            })
          )
      })
    );


}
