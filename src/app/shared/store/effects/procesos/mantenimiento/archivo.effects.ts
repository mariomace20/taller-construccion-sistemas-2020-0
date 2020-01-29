import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ArchivoService } from '../../../../../procesos/services'
import { AppState } from '../../../app.reducers';
import { Store } from '@ngrx/store';
import * as fromArchivo from '../../../actions/procesos/mantenimiento/archivo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../../utils';

@Injectable()
export class ArchivoEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private archivoService: ArchivoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromArchivo.actions.GET_ALL),
      switchMap(() => {
        return this.archivoService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res,'label',false,'idArchivo','nombreArchivo')
              return new fromArchivo.GetAllArchivoSuccess(res);
            }),
            catchError(err => {
              return of(new fromArchivo.GetAllArchivoFail(err));
            })
          )
      })
    );

  @Effect()
  AddArchivo$ = this.actions$
    .pipe(
      ofType(fromArchivo.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromArchivo.AddArchivo, GlobalMessages]) => {
        return this.archivoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromArchivo.AddArchivoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromArchivo.AddArchivoFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateArchivo$ = this.actions$
    .pipe(
      ofType(fromArchivo.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromArchivo.UpdateArchivo, GlobalMessages]) => {
        return this.archivoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromArchivo.UpdateArchivoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromArchivo.UpdateArchivoFail(err)))
          )
      })
    );

  @Effect()
  DeleteArchivo = this.actions$
    .pipe(
      ofType(fromArchivo.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromArchivo.UpdateArchivo, GlobalMessages]) => {
        return this.archivoService.eliminar(action.payload)
          .pipe(
            map(res => new fromArchivo.DeleteArchivoSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromArchivo.DeleteArchivoFail(err)))
          )
      })
    );

}
