import { Injectable } from '@angular/core';
import { EsquemaTarifarioService } from '../../../../tarifario/services/esquema-tarifario.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEsquemaTarifario from '../../actions/tarifario/esquema-tarifario.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class EsquemaTarifarioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private esquemaTarifarioService: EsquemaTarifarioService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEsquemaTarifario.actions.GET_ALL),
      switchMap(() => {
        return this.esquemaTarifarioService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              addLabelToObjsArr(res, 'label', false, 'idEsquema', 'descripcionEsquema');
              return new fromEsquemaTarifario.GetAllEsquemaTarifarioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEsquemaTarifario.GetAllEsquemaTarifarioFail(err));
            })
          )
      })
    );

  @Effect()
  AddEsquemaTarifario$ = this.actions$
    .pipe(
      ofType(fromEsquemaTarifario.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEsquemaTarifario.AddEsquemaTarifario, GlobalMessages]) => {
        return this.esquemaTarifarioService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromEsquemaTarifario.AddEsquemaTarifarioSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEsquemaTarifario.AddEsquemaTarifarioFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateEsquemaTarifario$ = this.actions$
    .pipe(
      ofType(fromEsquemaTarifario.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEsquemaTarifario.UpdateEsquemaTarifario, GlobalMessages]) => {
        return this.esquemaTarifarioService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromEsquemaTarifario.UpdateEsquemaTarifarioSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEsquemaTarifario.UpdateEsquemaTarifarioFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteEsquemaTarifario$ = this.actions$
    .pipe(
      ofType(fromEsquemaTarifario.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEsquemaTarifario.DeleteEsquemaTarifario, GlobalMessages]) => {
        return this.esquemaTarifarioService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromEsquemaTarifario.DeleteEsquemaTarifarioSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEsquemaTarifario.DeleteEsquemaTarifarioFail(err))
            })
          )
      })
    );
/*
    @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromEsquemaTarifario.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEsquemaTarifario.DownloadEsquemaTarifario, GlobalMessages]) => {
        return this.esquemaTarifarioService.exportar()
          .pipe(
            map(res => new fromEsquemaTarifario.DownloadEsquemaTarifarioSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromEsquemaTarifario.DownloadEsquemaTarifarioFail(err)))
          )
      })
    );*/

}
