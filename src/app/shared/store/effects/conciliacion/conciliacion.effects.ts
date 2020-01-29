import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ConciliacionService } from '../../../../conciliacion/services';
import * as fromConciliacion from '../../actions/conciliacion/conciliacion.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class ConciliacionEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private conciliacionService: ConciliacionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromConciliacion.actions.GET_ALL),
      switchMap(() => {
        return this.conciliacionService.buscarTodos()
          .pipe(
            map(res => {
              return new fromConciliacion.GetAllConciliacionSuccess(res);
            }),
            catchError(err => of(new fromConciliacion.GetAllConciliacionFail(err)))
          )
      })
    );

  @Effect()
  GetByPaquete$ = this.actions$
    .pipe(
      ofType(fromConciliacion.actions.GET_BY_PAQUETE),
      switchMap((action: fromConciliacion.GetByPaquete) => {
        return this.conciliacionService.buscarPorPaquete(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idConciliacion', 'nombreProcedimiento');
              return new fromConciliacion.GetByPaqueteSuccess(res)
            }),
            catchError(err => of(new fromConciliacion.GetByPaqueteFail(err)))
          )
      })
    );

  @Effect()
  AddConciliacion$ = this.actions$
    .pipe(
      ofType(fromConciliacion.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromConciliacion.AddConciliacion, GlobalMessages]) => {
        return this.conciliacionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromConciliacion.AddConciliacionSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromConciliacion.AddConciliacionFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateConciliacion$ = this.actions$
    .pipe(
      ofType(fromConciliacion.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromConciliacion.UpdateConciliacion, GlobalMessages]) => {
        return this.conciliacionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromConciliacion.UpdateConciliacionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromConciliacion.UpdateConciliacionFail(err)))
          )
      })
    );

  @Effect()
  DeleteConciliacion = this.actions$
    .pipe(
      ofType(fromConciliacion.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromConciliacion.UpdateConciliacion, GlobalMessages]) => {
        return this.conciliacionService.eliminar(action.payload)
          .pipe(
            map(res => new fromConciliacion.DeleteConciliacionSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromConciliacion.DeleteConciliacionFail(err)))
          )
      })
    );
}
