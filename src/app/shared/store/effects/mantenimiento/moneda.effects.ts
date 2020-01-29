import { Injectable } from '@angular/core';
import { MonedaService } from '../../../../mantenimiento/services/moneda.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromMoneda from '../../actions/mantenimiento/moneda.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class MonedaEffects {

  constructor(
    private actions$: Actions,
    private monedaService: MonedaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromMoneda.actions.GET_ALL),
      switchMap(() => {
        return this.monedaService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,'idMoneda')
              addLabelToObjsArr(res, 'label', false, 'idMoneda', 'descripcionMoneda');
              return new fromMoneda.GetAllMonedaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromMoneda.GetAllMonedaFail(err));
            })
          )
      })
    );

}
