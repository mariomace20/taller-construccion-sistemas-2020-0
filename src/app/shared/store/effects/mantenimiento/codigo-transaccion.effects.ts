import { Injectable } from '@angular/core';
import { CodigoTransaccionService } from '../../../../mantenimiento/services/codigo-transaccion.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCodigoTransaccion from '../../actions/mantenimiento/codigo-transaccion.action';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ClaseTransaccionService } from '../../../../mantenimiento/services';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class CodigoTransaccionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private codigoTransaccionService: CodigoTransaccionService,
    private claseTransaccionService: ClaseTransaccionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCodigoTransaccion.actions.GET_ALL),
      switchMap(() => {
        return this.codigoTransaccionService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,'idClaseTransaccion')
              addLabelToObjsArr(res, 'label', false, 'idCodigoTransaccion', 'descripcionCodigoTransaccion');
              return new fromCodigoTransaccion.GetAllCodigoTransaccionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCodigoTransaccion.GetAllCodigoTransaccionFail(err));
            })
          )
      })
    );

  @Effect()
  GetByClaseTransaccion$ = this.actions$
    .pipe(
      ofType(fromCodigoTransaccion.actions.GET_BY_CLASE),
      map((action: fromCodigoTransaccion.GetByClaseTransaccion) => action.payload),
      switchMap(payload => {
        return this.claseTransaccionService.buscarCodigosTransaccion(payload)
          .pipe(
            map(res => {
              sortByAttr(res,'idCodigoTransaccion')
              addLabelToObjsArr(res, 'label', false, 'idCodigoTransaccion', 'descripcionCodigoTransaccion');
              return new fromCodigoTransaccion.GetByClaseTransaccionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCodigoTransaccion.GetByClaseTransaccionFail(err));
            })
          )
      })
    );

  @Effect()
  AddCodigoTransaccion$ = this.actions$
    .pipe(
      ofType(fromCodigoTransaccion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoTransaccion.AddCodigoTransaccion, GlobalMessages]) => {
        return this.codigoTransaccionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoTransaccion.AddCodigoTransaccionSuccess
                ({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoTransaccion.AddCodigoTransaccionFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCodigoTransaccion$ = this.actions$
    .pipe(
      ofType(fromCodigoTransaccion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoTransaccion.UpdateCodigoTransaccion, GlobalMessages]) => {
        return this.codigoTransaccionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoTransaccion.UpdateCodigoTransaccionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoTransaccion.UpdateCodigoTransaccionFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCodigoTransaccion$ = this.actions$
    .pipe(
      ofType(fromCodigoTransaccion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoTransaccion.DeleteCodigoTransaccion, GlobalMessages]) => {
        return this.codigoTransaccionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoTransaccion.DeleteCodigoTransaccionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoTransaccion.DeleteCodigoTransaccionFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromCodigoTransaccion.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoTransaccion.DownloadCodigoTransaccion, GlobalMessages]) => {
        return this.codigoTransaccionService.exportar()
          .pipe(
            map(res => new fromCodigoTransaccion.DownloadCodigoTransaccionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCodigoTransaccion.DownloadCodigoTransaccionFail(err)))
          )
      })
    );

}
