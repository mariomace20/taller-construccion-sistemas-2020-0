import { Injectable } from '@angular/core';
import { ClaseTransaccionService } from '../../../../mantenimiento/services/clase-transaccion.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromClaseTransaccion from '../../actions/mantenimiento/clase-transaccion.action';
import { switchMap, map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class ClaseTransaccionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private claseTransaccionService: ClaseTransaccionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromClaseTransaccion.actions.GET_ALL),
      switchMap(() => {
        return this.claseTransaccionService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,'idClaseTransaccion')
              addLabelToObjsArr(res, 'label', false, 'idClaseTransaccion', 'descripcionClaseTransaccion');
              return new fromClaseTransaccion.GetAllClaseTransaccionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromClaseTransaccion.GetAllClaseTransaccionFail(err));
            })
          )
      })
    );

  @Effect()
  AddClaseTransaccion$ = this.actions$
    .pipe(
      ofType(fromClaseTransaccion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromClaseTransaccion.AddClaseTransaccion, GlobalMessages]) => {
        return this.claseTransaccionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromClaseTransaccion.AddClaseTransaccionSuccess
                ({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromClaseTransaccion.AddClaseTransaccionFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateClaseTransaccion$ = this.actions$
    .pipe(
      ofType(fromClaseTransaccion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromClaseTransaccion.UpdateClaseTransaccion, GlobalMessages]) => {
        return this.claseTransaccionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromClaseTransaccion.UpdateClaseTransaccionSuccess
                ({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromClaseTransaccion.UpdateClaseTransaccionFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteClaseTransaccion$ = this.actions$
    .pipe(
      ofType(fromClaseTransaccion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromClaseTransaccion.DeleteClaseTransaccion, GlobalMessages]) => {
        return this.claseTransaccionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromClaseTransaccion.DeleteClaseTransaccionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromClaseTransaccion.DeleteClaseTransaccionFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromClaseTransaccion.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromClaseTransaccion.DownloadClaseTransaccion, GlobalMessages]) => {
        return this.claseTransaccionService.exportar()
          .pipe(
            map(res => new fromClaseTransaccion.DownloadClaseTransaccionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromClaseTransaccion.DownloadClaseTransaccionFail(err)))
          )
      })
    );

}
