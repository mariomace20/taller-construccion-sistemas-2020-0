import { Injectable } from '@angular/core';
import { OrigenArchivoService } from '../../../../mantenimiento/services/origen-archivo.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOrigenArchivo from '../../actions/mantenimiento/origen-archivo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Injectable()
export class OrigenArchivoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private origenArchivoService: OrigenArchivoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromOrigenArchivo.actions.GET_ALL),
      switchMap(() => {
        return this.origenArchivoService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idOrigenArchivo")
              addLabelToObjsArr(res,'label',false,'idOrigenArchivo','descripcionOrigenArchivo')
              return new fromOrigenArchivo.GetAllOrigenArchivoSuccess(res);
            }),
            catchError((err) => {
              return of(new fromOrigenArchivo.GetAllOrigenArchivoFail(err));
            })
          )
      })
    );

  @Effect()
  GetOrigenesArchivosConciliados$ = this.actions$
    .pipe(
      ofType(fromOrigenArchivo.actions.GET_ORIGENES_ARCHIVOS_CONCILIADOS),
      switchMap(() => {
        return this.origenArchivoService.buscarOrigenArchivoPorConciliacion()
          .pipe(
            map(res => {
              sortByAttr(res,"idOrigenArchivo")
              addLabelToObjsArr(res, 'label', false, 'idOrigenArchivo', 'descripcionOrigenArchivo');
              return new fromOrigenArchivo.GetOrigenesArchivosConciliadosSuccess(res);
            }),
            catchError((err) => of(new fromOrigenArchivo.GetOrigenesArchivosConciliadosFail(err)))
          )
      })
    );

  @Effect()
  AddOrigenArchivo$ = this.actions$
    .pipe(
      ofType(fromOrigenArchivo.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromOrigenArchivo.AddOrigenArchivo, GlobalMessages]) => {
        return this.origenArchivoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromOrigenArchivo.AddOrigenArchivoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromOrigenArchivo.AddOrigenArchivoFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateOrigenArchivo$ = this.actions$
    .pipe(
      ofType(fromOrigenArchivo.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromOrigenArchivo.UpdateOrigenArchivo, GlobalMessages]) => {
        return this.origenArchivoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromOrigenArchivo.UpdateOrigenArchivoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromOrigenArchivo.UpdateOrigenArchivoFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteOrigenArchivo$ = this.actions$
    .pipe(
      ofType(fromOrigenArchivo.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromOrigenArchivo.DeleteOrigenArchivo, GlobalMessages]) => {
        return this.origenArchivoService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromOrigenArchivo.DeleteOrigenArchivoSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromOrigenArchivo.DeleteOrigenArchivoFail(err))
            })
          )
      })
    );

}
