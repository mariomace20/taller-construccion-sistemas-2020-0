import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ConciliacionTablasService } from '../../../../conciliacion/services';
import * as fromConciliacionTablas from '../../actions/conciliacion/conciliacion-tablas.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class ConciliacionTablasEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private conciliacionTablasService: ConciliacionTablasService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromConciliacionTablas.actions.GET_ALL),
      switchMap(() => {
        return this.conciliacionTablasService.buscarTodos()
          .pipe(
            map(res => {
              return new fromConciliacionTablas.GetAllConciliacionTablasSuccess(res);
            }),
            catchError(err => of(new fromConciliacionTablas.GetAllConciliacionTablasFail(err)))
          )
      })
    );

  @Effect()
  GetByConciliacion$ = this.actions$
    .pipe(
      ofType(fromConciliacionTablas.actions.GET_BY_CONCILIACION),
      switchMap((action: fromConciliacionTablas.GetByConciliacion) => {
        return this.conciliacionTablasService.buscarPorConciliacion(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idConcTabla', 'nombreProcedimiento');
              return new fromConciliacionTablas.GetByConciliacionSuccess(res)
            }),
            catchError(err => of(new fromConciliacionTablas.GetByConciliacionFail(err)))
          )
      })
    );

  @Effect()
  AddConciliacionTablas$ = this.actions$
    .pipe(
      ofType(fromConciliacionTablas.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromConciliacionTablas.AddConciliacionTablas, GlobalMessages]) => {
        return this.conciliacionTablasService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromConciliacionTablas.AddConciliacionTablasSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromConciliacionTablas.AddConciliacionTablasFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateConciliacionTablas$ = this.actions$
    .pipe(
      ofType(fromConciliacionTablas.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromConciliacionTablas.UpdateConciliacionTablas, GlobalMessages]) => {
        return this.conciliacionTablasService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromConciliacionTablas.UpdateConciliacionTablasSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromConciliacionTablas.UpdateConciliacionTablasFail(err)))
          )
      })
    );

  @Effect()
  DeleteConciliacionTablas = this.actions$
    .pipe(
      ofType(fromConciliacionTablas.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromConciliacionTablas.UpdateConciliacionTablas, GlobalMessages]) => {
        return this.conciliacionTablasService.eliminar(action.payload)
          .pipe(
            map(res => new fromConciliacionTablas.DeleteConciliacionTablasSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromConciliacionTablas.DeleteConciliacionTablasFail(err)))
          )
      })
    );
}
