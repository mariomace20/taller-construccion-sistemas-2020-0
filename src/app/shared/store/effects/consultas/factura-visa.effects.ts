import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { FacturaVisaService } from '../../../../consultas/service/factura-visa.service';
import * as fromFacturaVisa from '../../actions/consultas/factura-visa.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class FacturaVisaEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private facturaVisaMcService: FacturaVisaService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromFacturaVisa.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromFacturaVisa.GetFacturaVisaCriterio) => {
        return this.facturaVisaMcService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromFacturaVisa.GetFacturaVisaCriterioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromFacturaVisa.GetFacturaVisaCriterioFail(err));
            })
          )
      })
    );

}
