import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { CampoActualizarService } from '../../../../conciliacion/services';
import * as fromCampoActualizar from '../../actions/conciliacion/campo-actualizar.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class CampoActualizarEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private conciliacionTablasService: CampoActualizarService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCampoActualizar.actions.GET_ALL),
      switchMap(() => {
        return this.conciliacionTablasService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCampoActualizar.GetAllCampoActualizarSuccess(res);
            }),
            catchError(err => of(new fromCampoActualizar.GetAllCampoActualizarFail(err)))
          )
      })
    );

  @Effect()
  GetByConciliacionTablas$ = this.actions$
    .pipe(
      ofType(fromCampoActualizar.actions.GET_BY_CONCILIACION_TABLAS),
      switchMap((action: fromCampoActualizar.GetByConciliacionTablas) => {
        return this.conciliacionTablasService.buscarPorConciliacionTablas(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idCampoActualizar', 'nombreProcedimiento');
              return new fromCampoActualizar.GetByConciliacionTablasSuccess(res)
            }),
            catchError(err => of(new fromCampoActualizar.GetByConciliacionTablasFail(err)))
          )
      })
    );

  @Effect()
  AddCampoActualizar$ = this.actions$
    .pipe(
      ofType(fromCampoActualizar.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoActualizar.AddCampoActualizar, GlobalMessages]) => {
        return this.conciliacionTablasService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoActualizar.AddCampoActualizarSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoActualizar.AddCampoActualizarFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateCampoActualizar$ = this.actions$
    .pipe(
      ofType(fromCampoActualizar.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoActualizar.UpdateCampoActualizar, GlobalMessages]) => {
        return this.conciliacionTablasService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoActualizar.UpdateCampoActualizarSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromCampoActualizar.UpdateCampoActualizarFail(err)))
          )
      })
    );

  @Effect()
  DeleteCampoActualizar = this.actions$
    .pipe(
      ofType(fromCampoActualizar.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoActualizar.UpdateCampoActualizar, GlobalMessages]) => {
        return this.conciliacionTablasService.eliminar(action.payload)
          .pipe(
            map(res => new fromCampoActualizar.DeleteCampoActualizarSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCampoActualizar.DeleteCampoActualizarFail(err)))
          )
      })
    );
}
