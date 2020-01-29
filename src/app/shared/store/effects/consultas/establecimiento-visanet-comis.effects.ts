import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { EstablecimientoVisanetService } from '../../../../consultas/service/establecimiento-visanet.service';
import * as fromEstablecimientoVisanetComis from '../../actions/consultas/establecimiento-visanet-comis.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class EstablecimientoVisanetComisEffects{
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private establecimientoVisanetService: EstablecimientoVisanetService
  ) { }

  @Effect()
  GetEstablecimientoVisanetComis$ = this.actions$
    .pipe(
      ofType(fromEstablecimientoVisanetComis.actions.GET_DETALLE_COMISION),
      switchMap((action: fromEstablecimientoVisanetComis.GetEstablecimientoVisanetComis) => {
        return this.establecimientoVisanetService.buscarComisiones(action.payload)
          .pipe(
            map(res => {
              return new fromEstablecimientoVisanetComis.GetEstablecimientoVisanetComisSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEstablecimientoVisanetComis.GetEstablecimientoVisanetComisFail(err));
            })
          )
      })
    );

}
