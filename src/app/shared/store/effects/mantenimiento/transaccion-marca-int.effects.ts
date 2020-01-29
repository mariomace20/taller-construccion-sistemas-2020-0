import { Injectable } from '@angular/core';
import { TransaccionMarcaIntService } from '../../../../mantenimiento/services/transaccion-marca-int.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTransaccionMarcaInt from '../../actions/mantenimiento/transaccion-marca-int.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class TransaccionMarcaIntEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private transaccionMarcaIntService: TransaccionMarcaIntService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTransaccionMarcaInt.actions.GET_ALL),
      switchMap(() => {
        return this.transaccionMarcaIntService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,'idTransaccion')
              addLabelToObjsArr(res, 'label', false, 'idTransaccion', 'descripcionTransaccion');
              return new fromTransaccionMarcaInt.GetAllTransaccionMarcaIntSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTransaccionMarcaInt.GetAllTransaccionMarcaIntFail(err));
            })
          )
      })
    );

  @Effect()
  GetXMembresia$ = this.actions$
    .pipe(
      ofType(fromTransaccionMarcaInt.actions.GET_X_MEMBRESIA),
      switchMap((action: fromTransaccionMarcaInt.GetTransaccionMarcaIntVisaXMembresia) =>{
        return this.transaccionMarcaIntService.buscarPorMembresias(action.payload)
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idTransaccion', 'descripcionTransaccion');
              return new fromTransaccionMarcaInt.GetTransaccionMarcaIntVisaXMembresiaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTransaccionMarcaInt.GetTransaccionMarcaIntVisaXMembresiaFail(err));
            })
          )
      })
    );

  @Effect()
  AddTransaccionMarcaInt$ = this.actions$
    .pipe(
      ofType(fromTransaccionMarcaInt.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionMarcaInt.AddTransaccionMarcaInt, GlobalMessages]) => {
        return this.transaccionMarcaIntService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTransaccionMarcaInt.AddTransaccionMarcaIntSuccess
                ({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTransaccionMarcaInt.AddTransaccionMarcaIntFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTransaccionMarcaInt$ = this.actions$
    .pipe(
      ofType(fromTransaccionMarcaInt.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionMarcaInt.UpdateTransaccionMarcaInt, GlobalMessages]) => {
        return this.transaccionMarcaIntService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTransaccionMarcaInt.UpdateTransaccionMarcaIntSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTransaccionMarcaInt.UpdateTransaccionMarcaIntFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTransaccionMarcaInt$ = this.actions$
    .pipe(
      ofType(fromTransaccionMarcaInt.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionMarcaInt.DeleteTransaccionMarcaInt, GlobalMessages]) => {
        return this.transaccionMarcaIntService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTransaccionMarcaInt.DeleteTransaccionMarcaIntSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTransaccionMarcaInt.DeleteTransaccionMarcaIntFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTransaccionMarcaInt.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTransaccionMarcaInt.DownloadTransaccionMarcaInt, GlobalMessages]) => {
        return this.transaccionMarcaIntService.exportar()
          .pipe(
            map(res => new fromTransaccionMarcaInt.DownloadTransaccionMarcaIntSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTransaccionMarcaInt.DownloadTransaccionMarcaIntFail(err)))
          )
      })
    );

}
