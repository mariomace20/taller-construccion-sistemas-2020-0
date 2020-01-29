import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromParametroSistema from '../../actions/mantenimiento/parametro-sistema.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ParametroSistemaService } from '../../../../mantenimiento/services';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ParametroSistemaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private parametroSistemaService: ParametroSistemaService
  ){}

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromParametroSistema.actions.GET_ALL),
      switchMap(() => {
        return this.parametroSistemaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromParametroSistema.GetAllParametroSistemaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromParametroSistema.GetAllParametroSistemaFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateParametroSistema$ = this.actions$
    .pipe(
      ofType(fromParametroSistema.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromParametroSistema.UpdateParametroSistema, GlobalMessages]) => {
        return this.parametroSistemaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromParametroSistema.UpdateParametroSistemaSuccess
                ({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromParametroSistema.UpdateParametroSistemaFail(err))
            })
          )
      })
    );

}
