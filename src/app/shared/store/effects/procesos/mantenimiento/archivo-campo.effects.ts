import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { ArchivoCampoService } from '../../../../../procesos/services';
import * as fromArchivoCampob from '../../../actions/procesos/mantenimiento/archivo-campo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../../utils';

@Injectable()
export class ArchivoCampoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private archivoCampoService: ArchivoCampoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromArchivoCampob.actions.GET_ALL),
      switchMap(() => {
        return this.archivoCampoService.buscarTodos()
          .pipe(
            map(res => {
              return new fromArchivoCampob.GetAllArchivoCampoSuccess(res);
            }),
            catchError(err => of(new fromArchivoCampob.GetAllArchivoCampoFail(err)))
          )
      })
    );

  @Effect()
  GetByArchivo$ = this.actions$
    .pipe(
      ofType(fromArchivoCampob.actions.GET_BY_ARCHIVO),
      switchMap((action: fromArchivoCampob.GetByArchivo) => {
        return this.archivoCampoService.buscarPorArchivo(action.payload)
          .pipe(
            map(res =>{
              addLabelToObjsArr(res, 'label', false, 'idArchivoCampo', 'descripcionItem');
              return new fromArchivoCampob.GetByArchivoSuccess(res)
            }),
            catchError(err => of(new fromArchivoCampob.GetByArchivoFail(err)))
          )
      })
    );

  @Effect()
  AddArchivoCampo$ = this.actions$
    .pipe(
      ofType(fromArchivoCampob.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromArchivoCampob.AddArchivoCampo, GlobalMessages]) => {
        return this.archivoCampoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromArchivoCampob.AddArchivoCampoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromArchivoCampob.AddArchivoCampoFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateArchivoCampo$ = this.actions$
    .pipe(
      ofType(fromArchivoCampob.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromArchivoCampob.UpdateArchivoCampo, GlobalMessages]) => {
        return this.archivoCampoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromArchivoCampob.UpdateArchivoCampoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromArchivoCampob.UpdateArchivoCampoFail(err)))
          )
      })
    );

  @Effect()
  DeleteArchivoCampo = this.actions$
    .pipe(
      ofType(fromArchivoCampob.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromArchivoCampob.UpdateArchivoCampo, GlobalMessages]) => {
        return this.archivoCampoService.eliminar(action.payload)
          .pipe(
            map(res => new fromArchivoCampob.DeleteArchivoCampoSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromArchivoCampob.DeleteArchivoCampoFail(err)))
          )
      })
    );
}
