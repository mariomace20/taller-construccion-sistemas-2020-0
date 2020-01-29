import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { CampoInsertarObservadaService } from '../../../../conciliacion/services';
import * as fromCampoInsertarObservada from '../../actions/conciliacion/campo-insertar-observada.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class CampoInsertarObservadaEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private conciliacionTablasService: CampoInsertarObservadaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCampoInsertarObservada.actions.GET_ALL),
      switchMap(() => {
        return this.conciliacionTablasService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCampoInsertarObservada.GetAllCampoInsertarObservadaSuccess(res);
            }),
            catchError(err => of(new fromCampoInsertarObservada.GetAllCampoInsertarObservadaFail(err)))
          )
      })
    );

  @Effect()
  GetByConciliacionTablas$ = this.actions$
    .pipe(
      ofType(fromCampoInsertarObservada.actions.GET_BY_CONCILIACION_TABLAS),
      switchMap((action: fromCampoInsertarObservada.GetByConciliacionTablas) => {
        return this.conciliacionTablasService.buscarPorConciliacionTablas(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idCmpInsObservada', 'nombreProcedimiento');
              return new fromCampoInsertarObservada.GetByConciliacionTablasSuccess(res)
            }),
            catchError(err => of(new fromCampoInsertarObservada.GetByConciliacionTablasFail(err)))
          )
      })
    );

  @Effect()
  AddCampoInsertarObservada$ = this.actions$
    .pipe(
      ofType(fromCampoInsertarObservada.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoInsertarObservada.AddCampoInsertarObservada, GlobalMessages]) => {
        return this.conciliacionTablasService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoInsertarObservada.AddCampoInsertarObservadaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoInsertarObservada.AddCampoInsertarObservadaFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateCampoInsertarObservada$ = this.actions$
    .pipe(
      ofType(fromCampoInsertarObservada.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoInsertarObservada.UpdateCampoInsertarObservada, GlobalMessages]) => {
        return this.conciliacionTablasService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoInsertarObservada.UpdateCampoInsertarObservadaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromCampoInsertarObservada.UpdateCampoInsertarObservadaFail(err)))
          )
      })
    );

  @Effect()
  DeleteCampoInsertarObservada = this.actions$
    .pipe(
      ofType(fromCampoInsertarObservada.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoInsertarObservada.UpdateCampoInsertarObservada, GlobalMessages]) => {
        return this.conciliacionTablasService.eliminar(action.payload)
          .pipe(
            map(res => new fromCampoInsertarObservada.DeleteCampoInsertarObservadaSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCampoInsertarObservada.DeleteCampoInsertarObservadaFail(err)))
          )
      })
    );
}
