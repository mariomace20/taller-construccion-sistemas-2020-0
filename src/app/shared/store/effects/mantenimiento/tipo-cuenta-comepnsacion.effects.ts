import { Injectable } from '@angular/core';
import { TipoCuentaCompensacionService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoCuentaCompensacion from '../../actions/mantenimiento/tipo-cuenta-compensacion.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class TipoCuentaCompensacionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private TipoCuentaCompensacionService: TipoCuentaCompensacionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoCuentaCompensacion.actions.GET_ALL),
      switchMap(() => {
        return this.TipoCuentaCompensacionService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idTipoCuentaComp', 'descripcionTipoCuentaComp');
              return new fromTipoCuentaCompensacion.GetAllTipoCuentaCompensacionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTipoCuentaCompensacion.GetAllTipoCuentaCompensacionFail(err));
            })
          )
      })
    );
/*
  @Effect()
  Add$ = this.actions$
    .pipe(
      ofType(fromTipoCuentaCompensacion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCuentaCompensacion.AddTipoCuentaCompensacion, GlobalMessages]) => {
        return this.TipoCuentaCompensacionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCuentaCompensacion.AddTipoCuentaCompensacionSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError(err => {
              return of(new fromTipoCuentaCompensacion.AddTipoCuentaCompensacionFail(err))
            })
          )
      })
    );

  @Effect()
  Update$ = this.actions$
    .pipe(
      ofType(fromTipoCuentaCompensacion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCuentaCompensacion.UpdateTipoCuentaCompensacion, GlobalMessages]) => {
        return this.TipoCuentaCompensacionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCuentaCompensacion.UpdateTipoCuentaCompensacionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError(err => {
              return of(new fromTipoCuentaCompensacion.UpdateTipoCuentaCompensacionFail(err))
            })
          )
      })
    );

  @Effect()
  Delete$ = this.actions$
    .pipe(
      ofType(fromTipoCuentaCompensacion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCuentaCompensacion.DeleteTipoCuentaCompensacion, GlobalMessages]) => {
        return this.TipoCuentaCompensacionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCuentaCompensacion.DeleteTipoCuentaCompensacionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError(err => {
              return of(new fromTipoCuentaCompensacion.DeleteTipoCuentaCompensacionFail(err))
            })
          )
      })
    );*/

}
