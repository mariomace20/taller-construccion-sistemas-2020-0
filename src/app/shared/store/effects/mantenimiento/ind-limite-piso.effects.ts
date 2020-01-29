import { Injectable } from '@angular/core';
import { IndLimitePisoService } from '../../../../mantenimiento/services/ind-limite-piso.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIndLimitePiso from '../../actions/mantenimiento/ind-limite-piso.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class IndLimitePisoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private indLimitePisoService: IndLimitePisoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromIndLimitePiso.actions.GET_ALL),
      switchMap(() => {

        return this.indLimitePisoService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idLimitePiso', 'descripcion');
              return new fromIndLimitePiso.GetAllIndLimitePisoSuccess(res);
            }),
            catchError((err) => {
              return of(new fromIndLimitePiso.GetAllIndLimitePisoFail(err));
            })
          )
      })
    );

  @Effect()
  AddIndLimitePiso$ = this.actions$
    .pipe(
      ofType(fromIndLimitePiso.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndLimitePiso.AddIndLimitePiso, GlobalMessages]) => {
        return this.indLimitePisoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromIndLimitePiso.AddIndLimitePisoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromIndLimitePiso.AddIndLimitePisoFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateIndLimitePiso$ = this.actions$
    .pipe(
      ofType(fromIndLimitePiso.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndLimitePiso.UpdateIndLimitePiso, GlobalMessages]) => {
        return this.indLimitePisoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromIndLimitePiso.UpdateIndLimitePisoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromIndLimitePiso.UpdateIndLimitePisoFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteIndLimitePiso$ = this.actions$
    .pipe(
      ofType(fromIndLimitePiso.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndLimitePiso.DeleteIndLimitePiso, GlobalMessages]) => {
        return this.indLimitePisoService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromIndLimitePiso.DeleteIndLimitePisoSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromIndLimitePiso.DeleteIndLimitePisoFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromIndLimitePiso.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndLimitePiso.DownloadIndLimitePiso, GlobalMessages]) => {
        return this.indLimitePisoService.exportar()
          .pipe(
            map(res => new fromIndLimitePiso.DownloadIndLimitePisoSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromIndLimitePiso.DownloadIndLimitePisoFail(err)))
          )
      })
    );

}
