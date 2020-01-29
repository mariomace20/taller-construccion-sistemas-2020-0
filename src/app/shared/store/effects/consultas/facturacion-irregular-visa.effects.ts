import { Injectable } from '@angular/core';
import { FacturacionIrregularVisaService } from '../../../../consultas/service/facturacion-irregular-visa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromFacturacionIrregularVisa from '../../actions/consultas/facturacion-irregular-visa.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class FacturacionIrregularVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private facturacionIrregularVisaService: FacturacionIrregularVisaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromFacturacionIrregularVisa.actions.GET_ALL),
      switchMap(() => {
        return this.facturacionIrregularVisaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromFacturacionIrregularVisa.GetAllFacturacionIrregularVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromFacturacionIrregularVisa.GetAllFacturacionIrregularVisaFail(err));
            })
          );
      })
    );

}
