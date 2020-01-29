import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { EstablecimientoVisanetService } from '../../../../consultas/service/establecimiento-visanet.service';
import * as fromEstablecimientoVisanet from '../../actions/consultas/establecimiento-visanet.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class EstablecimientoVisanetEffects{
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private establecimientoVisanetService: EstablecimientoVisanetService
  ) { }

  @Effect()
  GetPaginada$ = this.actions$
    .pipe(
      ofType(fromEstablecimientoVisanet.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromEstablecimientoVisanet.GetCriterioEstablecimientoVisanet) => {
        return this.establecimientoVisanetService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromEstablecimientoVisanet.GetCriterioEstablecimientoVisanetSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEstablecimientoVisanet.GetCriterioEstablecimientoVisanetFail(err));
            })
          )
      })
    );

}
