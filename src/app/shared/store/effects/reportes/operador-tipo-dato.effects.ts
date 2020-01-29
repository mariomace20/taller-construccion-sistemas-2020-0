import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOperadorTipoDato from '../../actions/reportes/operador-tipo-dato.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { OperadorTipoDatoService } from '../../../../reportes/user/services/operador-tipo-dato.service';

@Injectable()
export class OperadorTipoDatoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private operadorTipoDatoService: OperadorTipoDatoService
  ) {}

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromOperadorTipoDato.actions.GET_ALL),
      switchMap(() => {
        return this.operadorTipoDatoService.buscarTodos()
          .pipe(
            map(res => {
              return new fromOperadorTipoDato.GetAllOperadorTipoDatoSuccess(res);
            }),
            catchError((err) => {
              return of(new fromOperadorTipoDato.GetAllOperadorTipoDatoFail(err));
            })
          )
      })
    );

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromOperadorTipoDato.actions.GET_CRITERIO),
        switchMap((action: fromOperadorTipoDato.GetCriterioOperadorTipoDato) => {
          return this.operadorTipoDatoService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                return new fromOperadorTipoDato.GetCriterioOperadorTipoDatoSuccess(res);
              }),
              catchError((err) => of(new fromOperadorTipoDato.GetCriterioOperadorTipoDatoFail(err)))
            )
        })
      );

      @Effect()
      GetOperadorTipoDato$ = this.actions$
        .pipe(
          ofType(fromOperadorTipoDato.actions.GET_GROUP_OPERADOR_TIPO_DATO),
          switchMap((action: fromOperadorTipoDato.GetGroupOperadorTipoDato) => {
            return this.operadorTipoDatoService.buscarOperadoresAgrupadosPorTipoDato(action.payload)
              .pipe(
                map(res => {
                  return new fromOperadorTipoDato.GetGroupOperadorTipoDatoSuccess(res);
                }),
                catchError((err) => of(new fromOperadorTipoDato.GetGroupOperadorTipoDatoFail(err)))
              )
          })
        );

}
