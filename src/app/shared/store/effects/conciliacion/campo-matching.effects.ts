import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { CampoMatchingService } from '../../../../conciliacion/services';
import * as fromCampoMatching from '../../actions/conciliacion/campo-matching.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class CampoMatchingEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private conciliacionTablasService: CampoMatchingService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCampoMatching.actions.GET_ALL),
      switchMap(() => {
        return this.conciliacionTablasService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCampoMatching.GetAllCampoMatchingSuccess(res);
            }),
            catchError(err => of(new fromCampoMatching.GetAllCampoMatchingFail(err)))
          )
      })
    );

  @Effect()
  GetByConciliacionTablas$ = this.actions$
    .pipe(
      ofType(fromCampoMatching.actions.GET_BY_CONCILIACION_TABLAS),
      switchMap((action: fromCampoMatching.GetByConciliacionTablas) => {
        return this.conciliacionTablasService.buscarPorConciliacionTablas(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idCampoMatching', 'nombreProcedimiento');
              return new fromCampoMatching.GetByConciliacionTablasSuccess(res)
            }),
            catchError(err => of(new fromCampoMatching.GetByConciliacionTablasFail(err)))
          )
      })
    );

  @Effect()
  AddCampoMatching$ = this.actions$
    .pipe(
      ofType(fromCampoMatching.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoMatching.AddCampoMatching, GlobalMessages]) => {
        return this.conciliacionTablasService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoMatching.AddCampoMatchingSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoMatching.AddCampoMatchingFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateCampoMatching$ = this.actions$
    .pipe(
      ofType(fromCampoMatching.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoMatching.UpdateCampoMatching, GlobalMessages]) => {
        return this.conciliacionTablasService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoMatching.UpdateCampoMatchingSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromCampoMatching.UpdateCampoMatchingFail(err)))
          )
      })
    );

  @Effect()
  DeleteCampoMatching = this.actions$
    .pipe(
      ofType(fromCampoMatching.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoMatching.UpdateCampoMatching, GlobalMessages]) => {
        return this.conciliacionTablasService.eliminar(action.payload)
          .pipe(
            map(res => new fromCampoMatching.DeleteCampoMatchingSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCampoMatching.DeleteCampoMatchingFail(err)))
          )
      })
    );
}
