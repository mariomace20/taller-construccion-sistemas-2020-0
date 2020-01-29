import { Injectable } from '@angular/core';
import { TransaccionXinstitucionService } from '../../../../mantenimiento/services/transaccion-x-institucion.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTransaccionXinstitucion from '../../actions/mantenimiento/transaccion-x-institucion.action';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TransaccionXinstitucionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private txnXinstitucionService: TransaccionXinstitucionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTransaccionXinstitucion.actions.GET_ALL),
      switchMap(() => {
        return this.txnXinstitucionService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTransaccionXinstitucion.GetAllTransaccionXinstitucionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTransaccionXinstitucion.GetAllTransaccionXinstitucionFail(err));
            })
          )
      })
    );

  @Effect()
  AddTxnxTransaccionXinstitucion$ = this.actions$
    .pipe(
      ofType(fromTransaccionXinstitucion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionXinstitucion.AddTransaccionXinstitucion, GlobalMessages]) => {
        return this.txnXinstitucionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTransaccionXinstitucion.AddTransaccionXinstitucionSuccess
                ({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTransaccionXinstitucion.AddTransaccionXinstitucionFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTxnxTransaccionXinstitucion$ = this.actions$
    .pipe(
      ofType(fromTransaccionXinstitucion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionXinstitucion.UpdateTransaccionXinstitucion, GlobalMessages]) => {
        return this.txnXinstitucionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTransaccionXinstitucion.UpdateTransaccionXinstitucionSuccess
                ({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTransaccionXinstitucion.UpdateTransaccionXinstitucionFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTxnxTransaccionXinstitucion$ = this.actions$
    .pipe(
      ofType(fromTransaccionXinstitucion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionXinstitucion.DeleteTransaccionXinstitucion, GlobalMessages]) => {
        return this.txnXinstitucionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTransaccionXinstitucion.DeleteTransaccionXinstitucionSuccess
                ({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTransaccionXinstitucion.DeleteTransaccionXinstitucionFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTransaccionXinstitucion.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionXinstitucion.DownloadTransaccionXinstitucion, GlobalMessages]) => {
        return this.txnXinstitucionService.exportar()
          .pipe(
            map(res => new fromTransaccionXinstitucion.DownloadTransaccionXinstitucionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTransaccionXinstitucion.DownloadTransaccionXinstitucionFail(err)))
          )
      })
    );

}
