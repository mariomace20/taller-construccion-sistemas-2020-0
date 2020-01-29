import { Injectable } from '@angular/core';
import { FacturacionIrregularMasterCardService } from '../../../../consultas/service/facturacion-irregular-master-card.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromFacturacionIrregularMasterCard from '../../actions/consultas/facturacion-irregular-master-card.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class FacturacionIrregularMasterCardEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private facturacionIrregularMasterCardService: FacturacionIrregularMasterCardService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromFacturacionIrregularMasterCard.actions.GET_ALL),
      switchMap(() => {
        return this.facturacionIrregularMasterCardService.buscarTodos()
          .pipe(
            map(res => {
              console.log(res);
              return new fromFacturacionIrregularMasterCard.GetAllFacturacionIrregularMasterCardSuccess(res);
            }),
            catchError((err) => {
              return of(new fromFacturacionIrregularMasterCard.GetAllFacturacionIrregularMasterCardFail(err));
            })
          );
      })
    );

}
