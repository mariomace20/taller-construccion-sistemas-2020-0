import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { CampoDiferenciaService } from '../../../../conciliacion/services';
import * as fromCampoDiferencia from '../../actions/conciliacion/campo-diferencia.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class CampoDiferenciaEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private conciliacionTablasService: CampoDiferenciaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCampoDiferencia.actions.GET_ALL),
      switchMap(() => {
        return this.conciliacionTablasService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCampoDiferencia.GetAllCampoDiferenciaSuccess(res);
            }),
            catchError(err => of(new fromCampoDiferencia.GetAllCampoDiferenciaFail(err)))
          )
      })
    );

  @Effect()
  GetByConciliacionTablas$ = this.actions$
    .pipe(
      ofType(fromCampoDiferencia.actions.GET_BY_CONCILIACION_TABLAS),
      switchMap((action: fromCampoDiferencia.GetByConciliacionTablas) => {
        return this.conciliacionTablasService.buscarPorConciliacionTablas(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idCampoDiferencia', 'nombreProcedimiento');
              return new fromCampoDiferencia.GetByConciliacionTablasSuccess(res)
            }),
            catchError(err => of(new fromCampoDiferencia.GetByConciliacionTablasFail(err)))
          )
      })
    );

  @Effect()
  AddCampoDiferencia$ = this.actions$
    .pipe(
      ofType(fromCampoDiferencia.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoDiferencia.AddCampoDiferencia, GlobalMessages]) => {
        return this.conciliacionTablasService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoDiferencia.AddCampoDiferenciaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoDiferencia.AddCampoDiferenciaFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateCampoDiferencia$ = this.actions$
    .pipe(
      ofType(fromCampoDiferencia.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoDiferencia.UpdateCampoDiferencia, GlobalMessages]) => {
        return this.conciliacionTablasService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoDiferencia.UpdateCampoDiferenciaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromCampoDiferencia.UpdateCampoDiferenciaFail(err)))
          )
      })
    );

  @Effect()
  DeleteCampoDiferencia = this.actions$
    .pipe(
      ofType(fromCampoDiferencia.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoDiferencia.UpdateCampoDiferencia, GlobalMessages]) => {
        return this.conciliacionTablasService.eliminar(action.payload)
          .pipe(
            map(res => new fromCampoDiferencia.DeleteCampoDiferenciaSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCampoDiferencia.DeleteCampoDiferenciaFail(err)))
          )
      })
    );
}
