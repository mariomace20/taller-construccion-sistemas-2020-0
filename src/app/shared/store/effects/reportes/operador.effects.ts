import { Injectable } from '@angular/core';
import { OperadorService } from '../../../../reportes/user/services/operador.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOperador from '../../actions/reportes/operador.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { addLabelToObjsArr } from '../../../utils';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OperadorEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private operadorService: OperadorService
  ) {}


  @Effect()
  GetByTipoDatoOperador$ = this.actions$
    .pipe(
      ofType(fromOperador.actions.GET_BY_TIPO_DATO),
      map((action: fromOperador.GetByTipoDatoOperador) => action.payload),
      switchMap(payload => {
        return this.operadorService.buscarPorTipoDato(payload)
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idOperador', 'descripcionOperador');
              return new fromOperador.GetByTipoDatoOperadorSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromOperador.GetByTipoDatoOperadorFail(err));
            })
          )
      })
    );
}
