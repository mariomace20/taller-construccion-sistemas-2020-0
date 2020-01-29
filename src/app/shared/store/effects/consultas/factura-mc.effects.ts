import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { FacturaMCService } from '../../../../consultas/service/factura-mc.service';
import * as fromFacturaMC from '../../actions/consultas/factura-mc.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class FacturaMCEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private facturaMcService: FacturaMCService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromFacturaMC.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromFacturaMC.GetFacturaMCCriterio) => {
        return this.facturaMcService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              console.log(res);
              return new fromFacturaMC.GetFacturaMCCriterioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromFacturaMC.GetFacturaMCCriterioFail(err));
            })
          )
      })
    );

}
