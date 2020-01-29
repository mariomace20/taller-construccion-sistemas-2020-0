import { Injectable } from '@angular/core';
import { IncomingVisaTC5TCR3Service } from '../../../../consultas/service/incoming-visa-tc5-tcr3.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC5TCR3 from '../../actions/consultas/incoming-visa-tc5-tcr3.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC5TCR3Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC5TCR3Service: IncomingVisaTC5TCR3Service
  ) { }

  @Effect()
  GetXIdSecuencia$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC5TCR3.actions.GET_DETALLE),
      switchMap((action: fromIncomingVisaTC5TCR3.GetDetalleTC5TCR3) => {
        return this.incomingVisaTC5TCR3Service.buscarPorIdSecuencia(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC5TCR3.GetDetalleTC5TCR3Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC5TCR3.GetDetalleTC5TCR3Fail(err));
            })
          )
      })
    );


}
